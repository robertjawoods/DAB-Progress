export const schema = gql`
  type Homework {
    id: Int!
    name: String!
    HomeworkCompleted: [HomeworkCompleted]!
  }

  type Query {
    homeworks: [Homework!]! @requireAuth
    homework(id: Int!): Homework @requireAuth
  }

  input CreateHomeworkInput {
    name: String!
  }

  input UpdateHomeworkInput {
    name: String
  }

  type Mutation {
    createHomework(input: CreateHomeworkInput!): Homework! @requireAuth
    updateHomework(id: Int!, input: UpdateHomeworkInput!): Homework!
      @requireAuth
    deleteHomework(id: Int!): Homework! @requireAuth
  }
`
