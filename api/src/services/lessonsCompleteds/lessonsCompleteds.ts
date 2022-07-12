import type {
  QueryResolvers,
  MutationResolvers,
  LessonsCompletedResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lessonsCompleteds: QueryResolvers['lessonsCompleteds'] = () => {
  return db.lessonsCompleted.findMany()
}

export const lessonsCompleted: QueryResolvers['lessonsCompleted'] = ({
  id,
}) => {
  return db.lessonsCompleted.findUnique({
    where: { id },
  })
}

export const createLessonsCompleted: MutationResolvers['createLessonsCompleted'] =
  ({ input }) => {
    return db.lessonsCompleted.create({
      data: input,
    })
  }

export const updateLessonsCompleted: MutationResolvers['updateLessonsCompleted'] =
  ({ id, input }) => {
    return db.lessonsCompleted.update({
      data: input,
      where: { id },
    })
  }

export const deleteLessonsCompleted: MutationResolvers['deleteLessonsCompleted'] =
  ({ id }) => {
    return db.lessonsCompleted.delete({
      where: { id },
    })
  }

export const LessonsCompleted: LessonsCompletedResolvers = {
  user: (_obj, { root }) =>
    db.lessonsCompleted.findUnique({ where: { id: root.id } }).user(),
  lesson: (_obj, { root }) =>
    db.lessonsCompleted.findUnique({ where: { id: root.id } }).lesson(),
}
