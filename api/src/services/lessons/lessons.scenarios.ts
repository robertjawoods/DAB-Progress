import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LessonCreateArgs>({
  lesson: {
    one: { data: { name: 'String', index: 7638785 } },
    two: { data: { name: 'String', index: 5950584 } },
  },
})

export type StandardScenario = typeof standard
