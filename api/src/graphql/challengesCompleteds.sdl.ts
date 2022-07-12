export const schema = gql`
  type ChallengesCompleted {
    id: Int!
    challenge: Challenge!
    user: User!
    completedCount: Int!
    challengeId: Int!
    userId: Int!
  }

  type Query {
    challengesCompleteds: [ChallengesCompleted!]! @requireAuth
    challengesCompleted(id: Int!): ChallengesCompleted @requireAuth
  }

  input CreateChallengesCompletedInput {
    completedCount: Int!
    challengeId: Int!
    userId: Int!
  }

  input UpdateChallengesCompletedInput {
    completedCount: Int
    challengeId: Int
    userId: Int
  }

  type Mutation {
    createChallengesCompleted(
      input: CreateChallengesCompletedInput!
    ): ChallengesCompleted! @requireAuth
    updateChallengesCompleted(
      id: Int!
      input: UpdateChallengesCompletedInput!
    ): ChallengesCompleted! @requireAuth
    deleteChallengesCompleted(id: Int!): ChallengesCompleted! @requireAuth
  }
`
