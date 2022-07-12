import {
  challengesCompleteds,
  challengesCompleted,
  createChallengesCompleted,
  updateChallengesCompleted,
  deleteChallengesCompleted,
} from './challengesCompleteds'
import type { StandardScenario } from './challengesCompleteds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('challengesCompleteds', () => {
  scenario(
    'returns all challengesCompleteds',
    async (scenario: StandardScenario) => {
      const result = await challengesCompleteds()

      expect(result.length).toEqual(
        Object.keys(scenario.challengesCompleted).length
      )
    }
  )

  scenario(
    'returns a single challengesCompleted',
    async (scenario: StandardScenario) => {
      const result = await challengesCompleted({
        id: scenario.challengesCompleted.one.id,
      })

      expect(result).toEqual(scenario.challengesCompleted.one)
    }
  )

  scenario(
    'creates a challengesCompleted',
    async (scenario: StandardScenario) => {
      const result = await createChallengesCompleted({
        input: {
          challengeId: scenario.challengesCompleted.two.challengeId,
          userId: scenario.challengesCompleted.two.userId,
        },
      })

      expect(result.challengeId).toEqual(
        scenario.challengesCompleted.two.challengeId
      )
      expect(result.userId).toEqual(scenario.challengesCompleted.two.userId)
    }
  )

  scenario(
    'updates a challengesCompleted',
    async (scenario: StandardScenario) => {
      const original = await challengesCompleted({
        id: scenario.challengesCompleted.one.id,
      })
      const result = await updateChallengesCompleted({
        id: original.id,
        input: { challengeId: scenario.challengesCompleted.two.challengeId },
      })

      expect(result.challengeId).toEqual(
        scenario.challengesCompleted.two.challengeId
      )
    }
  )

  scenario(
    'deletes a challengesCompleted',
    async (scenario: StandardScenario) => {
      const original = await deleteChallengesCompleted({
        id: scenario.challengesCompleted.one.id,
      })
      const result = await challengesCompleted({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
