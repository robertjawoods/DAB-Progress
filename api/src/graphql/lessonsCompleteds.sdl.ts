export const schema = gql`
  type LessonsCompleted {
    id: Int!
    user: User!
    lesson: Lesson!
    watchedVideo: Boolean!
    readText: Boolean!
    completionDate: DateTime
    userId: Int!
    lessonId: Int!
  }

  type Query {
    lessonsCompleteds: [LessonsCompleted!]! @requireAuth
    lessonsCompleted(id: Int!): LessonsCompleted @requireAuth
  }

  input CreateLessonsCompletedInput {
    watchedVideo: Boolean!
    readText: Boolean!
    completionDate: DateTime
    userId: Int!
    lessonId: Int!
  }

  input UpdateLessonsCompletedInput {
    watchedVideo: Boolean
    readText: Boolean
    completionDate: DateTime
    userId: Int
    lessonId: Int
  }

  type Mutation {
    createLessonsCompleted(
      input: CreateLessonsCompletedInput!
    ): LessonsCompleted! @requireAuth
    updateLessonsCompleted(
      id: Int!
      input: UpdateLessonsCompletedInput!
    ): LessonsCompleted! @requireAuth
    deleteLessonsCompleted(id: Int!): LessonsCompleted! @requireAuth
  }
`
