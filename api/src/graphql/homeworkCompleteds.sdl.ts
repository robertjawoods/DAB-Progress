export const schema = gql`
  type HomeworkCompleted {
    id: Int!
    user: User!
    homework: Homework!
    lastCompletionDate: DateTime
    userId: Int!
    homeworkId: Int!
  }

  type Query {
    homeworkCompleteds: [HomeworkCompleted!]! @requireAuth
    homeworkCompleted(id: Int!): HomeworkCompleted @requireAuth
  }

  input CreateHomeworkCompletedInput {
    lastCompletionDate: DateTime
    userId: Int!
    homeworkId: Int!
  }

  input UpdateHomeworkCompletedInput {
    lastCompletionDate: DateTime
    userId: Int
    homeworkId: Int
  }

  type Mutation {
    createHomeworkCompleted(
      input: CreateHomeworkCompletedInput!
    ): HomeworkCompleted! @requireAuth
    updateHomeworkCompleted(
      id: Int!
      input: UpdateHomeworkCompletedInput!
    ): HomeworkCompleted! @requireAuth
    deleteHomeworkCompleted(id: Int!): HomeworkCompleted! @requireAuth
  }
`
