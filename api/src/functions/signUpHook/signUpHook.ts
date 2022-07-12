import type { APIGatewayEvent, Context } from 'aws-lambda'

import {
  verifyEvent,
  VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { UserCreatedPayload } from 'src/models/UserCreatedPayload'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _: Context) => {
  const clerkInfo = { webhook: 'clerk' }
  const webhookLogger = logger.child({ clerkInfo })

  webhookLogger.info('Invoked signUpHook function')

  try {
    const options: VerifyOptions = {
      signatureHeader: 'svix-signatrure',
      signatureTransformer: (signature) => {
        const signatures = signature.split(' ')

        for (const versionedSignature of signatures) {
          const [version, signature] = versionedSignature.split(',')

          if (version === 'v1') {
            return signature
          }
        }
      },
    }

    const svixId = event.headers['svix-id']
    const svixTimestamp = event.headers['svix-timestamp']

    verifyEvent('base64Sha256Verifier', {
      event,
      secret: '',
      payload: `${svixId}.${svixTimestamp}.${event.body}`,
      options,
    })

    webhookLogger.debug({ headers: event.headers }, 'Headers')

    const payload = JSON.parse(event.body) as UserCreatedPayload

    await db.user.create({
      data: {
        email: payload.data.email_addresses[0].email_address,
        userId: payload.data.id,
      },
    })

    webhookLogger.info({ userId: payload.data.id }, 'User Created')

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'signUpHook function',
      }),
    }
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      webhookLogger.warn('Unauthorized')

      return {
        statusCode: 401,
      }
    } else {
      webhookLogger.error({ error }, error.message)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
    }
  }
}
