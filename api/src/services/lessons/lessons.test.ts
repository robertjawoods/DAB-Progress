import {
  lessons,
  lesson,
  createLesson,
  updateLesson,
  deleteLesson,
} from './lessons'
import type { StandardScenario } from './lessons.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lessons', () => {
  scenario('returns all lessons', async (scenario: StandardScenario) => {
    const result = await lessons()

    expect(result.length).toEqual(Object.keys(scenario.lesson).length)
  })

  scenario('returns a single lesson', async (scenario: StandardScenario) => {
    const result = await lesson({ id: scenario.lesson.one.id })

    expect(result).toEqual(scenario.lesson.one)
  })

  scenario('creates a lesson', async () => {
    const result = await createLesson({
      input: { name: 'String', index: 9389552 },
    })

    expect(result.name).toEqual('String')
    expect(result.index).toEqual(9389552)
  })

  scenario('updates a lesson', async (scenario: StandardScenario) => {
    const original = await lesson({ id: scenario.lesson.one.id })
    const result = await updateLesson({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a lesson', async (scenario: StandardScenario) => {
    const original = await deleteLesson({ id: scenario.lesson.one.id })
    const result = await lesson({ id: original.id })

    expect(result).toEqual(null)
  })
})
