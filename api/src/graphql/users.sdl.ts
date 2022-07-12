export const schema = gql`
  type User {
    id: Int!
    userId: String!
    email: String!
    LessonsCompleted: [LessonsCompleted]!
    HomeworkCompleted: [HomeworkCompleted]!
    ChallengesCompleted: [ChallengesCompleted]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    userId: String!
    email: String!
  }

  input UpdateUserInput {
    userId: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
