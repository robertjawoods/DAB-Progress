import {
  lessonsCompleteds,
  lessonsCompleted,
  createLessonsCompleted,
  updateLessonsCompleted,
  deleteLessonsCompleted,
} from './lessonsCompleteds'
import type { StandardScenario } from './lessonsCompleteds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lessonsCompleteds', () => {
  scenario(
    'returns all lessonsCompleteds',
    async (scenario: StandardScenario) => {
      const result = await lessonsCompleteds()

      expect(result.length).toEqual(
        Object.keys(scenario.lessonsCompleted).length
      )
    }
  )

  scenario(
    'returns a single lessonsCompleted',
    async (scenario: StandardScenario) => {
      const result = await lessonsCompleted({
        id: scenario.lessonsCompleted.one.id,
      })

      expect(result).toEqual(scenario.lessonsCompleted.one)
    }
  )

  scenario('creates a lessonsCompleted', async (scenario: StandardScenario) => {
    const result = await createLessonsCompleted({
      input: {
        watchedVideo: true,
        readText: true,
        userId: scenario.lessonsCompleted.two.userId,
        lessonId: scenario.lessonsCompleted.two.lessonId,
      },
    })

    expect(result.watchedVideo).toEqual(true)
    expect(result.readText).toEqual(true)
    expect(result.userId).toEqual(scenario.lessonsCompleted.two.userId)
    expect(result.lessonId).toEqual(scenario.lessonsCompleted.two.lessonId)
  })

  scenario('updates a lessonsCompleted', async (scenario: StandardScenario) => {
    const original = await lessonsCompleted({
      id: scenario.lessonsCompleted.one.id,
    })
    const result = await updateLessonsCompleted({
      id: original.id,
      input: { watchedVideo: false },
    })

    expect(result.watchedVideo).toEqual(false)
  })

  scenario('deletes a lessonsCompleted', async (scenario: StandardScenario) => {
    const original = await deleteLessonsCompleted({
      id: scenario.lessonsCompleted.one.id,
    })
    const result = await lessonsCompleted({ id: original.id })

    expect(result).toEqual(null)
  })
})
