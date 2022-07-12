export const schema = gql`
  type Lesson {
    id: Int!
    name: String!
    index: Int!
    LessonsCompleted: [LessonsCompleted]!
  }

  type Query {
    lessons: [Lesson!]! @requireAuth
    lesson(id: Int!): Lesson @requireAuth
  }

  input CreateLessonInput {
    name: String!
    index: Int!
  }

  input UpdateLessonInput {
    name: String
    index: Int
  }

  type Mutation {
    createLesson(input: CreateLessonInput!): Lesson! @requireAuth
    updateLesson(id: Int!, input: UpdateLessonInput!): Lesson! @requireAuth
    deleteLesson(id: Int!): Lesson! @requireAuth
  }
`
