import {
  homeworkCompleteds,
  homeworkCompleted,
  createHomeworkCompleted,
  updateHomeworkCompleted,
  deleteHomeworkCompleted,
} from './homeworkCompleteds'
import type { StandardScenario } from './homeworkCompleteds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('homeworkCompleteds', () => {
  scenario(
    'returns all homeworkCompleteds',
    async (scenario: StandardScenario) => {
      const result = await homeworkCompleteds()

      expect(result.length).toEqual(
        Object.keys(scenario.homeworkCompleted).length
      )
    }
  )

  scenario(
    'returns a single homeworkCompleted',
    async (scenario: StandardScenario) => {
      const result = await homeworkCompleted({
        id: scenario.homeworkCompleted.one.id,
      })

      expect(result).toEqual(scenario.homeworkCompleted.one)
    }
  )

  scenario(
    'creates a homeworkCompleted',
    async (scenario: StandardScenario) => {
      const result = await createHomeworkCompleted({
        input: {
          userId: scenario.homeworkCompleted.two.userId,
          homeworkId: scenario.homeworkCompleted.two.homeworkId,
        },
      })

      expect(result.userId).toEqual(scenario.homeworkCompleted.two.userId)
      expect(result.homeworkId).toEqual(
        scenario.homeworkCompleted.two.homeworkId
      )
    }
  )

  scenario(
    'updates a homeworkCompleted',
    async (scenario: StandardScenario) => {
      const original = await homeworkCompleted({
        id: scenario.homeworkCompleted.one.id,
      })
      const result = await updateHomeworkCompleted({
        id: original.id,
        input: { userId: scenario.homeworkCompleted.two.userId },
      })

      expect(result.userId).toEqual(scenario.homeworkCompleted.two.userId)
    }
  )

  scenario(
    'deletes a homeworkCompleted',
    async (scenario: StandardScenario) => {
      const original = await deleteHomeworkCompleted({
        id: scenario.homeworkCompleted.one.id,
      })
      const result = await homeworkCompleted({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
