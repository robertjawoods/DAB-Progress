import type {
  QueryResolvers,
  MutationResolvers,
  ChallengesCompletedResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const challengesCompleteds: QueryResolvers['challengesCompleteds'] =
  () => {
    return db.challengesCompleted.findMany()
  }

export const challengesCompleted: QueryResolvers['challengesCompleted'] = ({
  id,
}) => {
  return db.challengesCompleted.findUnique({
    where: { id },
  })
}

export const createChallengesCompleted: MutationResolvers['createChallengesCompleted'] =
  ({ input }) => {
    return db.challengesCompleted.create({
      data: input,
    })
  }

export const updateChallengesCompleted: MutationResolvers['updateChallengesCompleted'] =
  ({ id, input }) => {
    return db.challengesCompleted.update({
      data: input,
      where: { id },
    })
  }

export const deleteChallengesCompleted: MutationResolvers['deleteChallengesCompleted'] =
  ({ id }) => {
    return db.challengesCompleted.delete({
      where: { id },
    })
  }

export const ChallengesCompleted: ChallengesCompletedResolvers = {
  challenge: (_obj, { root }) =>
    db.challengesCompleted.findUnique({ where: { id: root.id } }).challenge(),
  user: (_obj, { root }) =>
    db.challengesCompleted.findUnique({ where: { id: root.id } }).user(),
}
