import type {
  QueryResolvers,
  MutationResolvers,
  HomeworkCompletedResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const homeworkCompleteds: QueryResolvers['homeworkCompleteds'] = () => {
  return db.homeworkCompleted.findMany()
}

export const homeworkCompleted: QueryResolvers['homeworkCompleted'] = ({
  id,
}) => {
  return db.homeworkCompleted.findUnique({
    where: { id },
  })
}

export const createHomeworkCompleted: MutationResolvers['createHomeworkCompleted'] =
  ({ input }) => {
    return db.homeworkCompleted.create({
      data: input,
    })
  }

export const updateHomeworkCompleted: MutationResolvers['updateHomeworkCompleted'] =
  ({ id, input }) => {
    return db.homeworkCompleted.update({
      data: input,
      where: { id },
    })
  }

export const deleteHomeworkCompleted: MutationResolvers['deleteHomeworkCompleted'] =
  ({ id }) => {
    return db.homeworkCompleted.delete({
      where: { id },
    })
  }

export const HomeworkCompleted: HomeworkCompletedResolvers = {
  user: (_obj, { root }) =>
    db.homeworkCompleted.findUnique({ where: { id: root.id } }).user(),
  homework: (_obj, { root }) =>
    db.homeworkCompleted.findUnique({ where: { id: root.id } }).homework(),
}
