import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HomeworkCreateArgs>({
  homework: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = typeof standard
