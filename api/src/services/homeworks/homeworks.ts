import type {
  QueryResolvers,
  MutationResolvers,
  HomeworkResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const homeworks: QueryResolvers['homeworks'] = () => {
  return db.homework.findMany()
}

export const homework: QueryResolvers['homework'] = ({ id }) => {
  return db.homework.findUnique({
    where: { id },
  })
}

export const createHomework: MutationResolvers['createHomework'] = ({
  input,
}) => {
  return db.homework.create({
    data: input,
  })
}

export const updateHomework: MutationResolvers['updateHomework'] = ({
  id,
  input,
}) => {
  return db.homework.update({
    data: input,
    where: { id },
  })
}

export const deleteHomework: MutationResolvers['deleteHomework'] = ({ id }) => {
  return db.homework.delete({
    where: { id },
  })
}

export const Homework: HomeworkResolvers = {
  HomeworkCompleted: (_obj, { root }) =>
    db.homework.findUnique({ where: { id: root.id } }).HomeworkCompleted(),
}
