import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { userId: 'String', email: 'String3863207' } },
    two: { data: { userId: 'String', email: 'String2851159' } },
  },
})

export type StandardScenario = typeof standard
