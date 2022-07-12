export const schema = gql`
  type Challenge {
    id: Int!
    name: String!
  }

  type Query {
    challenges: [Challenge!]! @requireAuth
    challenge(id: Int!): Challenge @requireAuth
  }

  input CreateChallengeInput {
    name: String!
  }

  input UpdateChallengeInput {
    name: String
  }

  type Mutation {
    createChallenge(input: CreateChallengeInput!): Challenge! @requireAuth
    updateChallenge(id: Int!, input: UpdateChallengeInput!): Challenge!
      @requireAuth
    deleteChallenge(id: Int!): Challenge! @requireAuth
  }
`
