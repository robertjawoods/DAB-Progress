import {
  homeworks,
  homework,
  createHomework,
  updateHomework,
  deleteHomework,
} from './homeworks'
import type { StandardScenario } from './homeworks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('homeworks', () => {
  scenario('returns all homeworks', async (scenario: StandardScenario) => {
    const result = await homeworks()

    expect(result.length).toEqual(Object.keys(scenario.homework).length)
  })

  scenario('returns a single homework', async (scenario: StandardScenario) => {
    const result = await homework({ id: scenario.homework.one.id })

    expect(result).toEqual(scenario.homework.one)
  })

  scenario('creates a homework', async () => {
    const result = await createHomework({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a homework', async (scenario: StandardScenario) => {
    const original = await homework({ id: scenario.homework.one.id })
    const result = await updateHomework({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a homework', async (scenario: StandardScenario) => {
    const original = await deleteHomework({ id: scenario.homework.one.id })
    const result = await homework({ id: original.id })

    expect(result).toEqual(null)
  })
})
