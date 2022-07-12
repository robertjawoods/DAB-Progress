import type {
  QueryResolvers,
  MutationResolvers,
  LessonResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lessons: QueryResolvers['lessons'] = () => {
  return db.lesson.findMany()
}

export const lesson: QueryResolvers['lesson'] = ({ id }) => {
  return db.lesson.findUnique({
    where: { id },
  })
}

export const createLesson: MutationResolvers['createLesson'] = ({ input }) => {
  return db.lesson.create({
    data: input,
  })
}

export const updateLesson: MutationResolvers['updateLesson'] = ({
  id,
  input,
}) => {
  return db.lesson.update({
    data: input,
    where: { id },
  })
}

export const deleteLesson: MutationResolvers['deleteLesson'] = ({ id }) => {
  return db.lesson.delete({
    where: { id },
  })
}

export const Lesson: LessonResolvers = {
  LessonsCompleted: (_obj, { root }) =>
    db.lesson.findUnique({ where: { id: root.id } }).LessonsCompleted(),
}
