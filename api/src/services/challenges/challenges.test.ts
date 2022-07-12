import {
  challenges,
  challenge,
  createChallenge,
  updateChallenge,
  deleteChallenge,
} from './challenges'
import type { StandardScenario } from './challenges.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('challenges', () => {
  scenario('returns all challenges', async (scenario: StandardScenario) => {
    const result = await challenges()

    expect(result.length).toEqual(Object.keys(scenario.challenge).length)
  })

  scenario('returns a single challenge', async (scenario: StandardScenario) => {
    const result = await challenge({ id: scenario.challenge.one.id })

    expect(result).toEqual(scenario.challenge.one)
  })

  scenario('creates a challenge', async () => {
    const result = await createChallenge({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a challenge', async (scenario: StandardScenario) => {
    const original = await challenge({ id: scenario.challenge.one.id })
    const result = await updateChallenge({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a challenge', async (scenario: StandardScenario) => {
    const original = await deleteChallenge({ id: scenario.challenge.one.id })
    const result = await challenge({ id: original.id })

    expect(result).toEqual(null)
  })
})
