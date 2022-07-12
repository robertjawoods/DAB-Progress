import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const challenges: QueryResolvers['challenges'] = () => {
  return db.challenge.findMany()
}

export const challenge: QueryResolvers['challenge'] = ({ id }) => {
  return db.challenge.findUnique({
    where: { id },
  })
}

export const createChallenge: MutationResolvers['createChallenge'] = ({
  input,
}) => {
  return db.challenge.create({
    data: input,
  })
}

export const updateChallenge: MutationResolvers['updateChallenge'] = ({
  id,
  input,
}) => {
  return db.challenge.update({
    data: input,
    where: { id },
  })
}

export const deleteChallenge: MutationResolvers['deleteChallenge'] = ({
  id,
}) => {
  return db.challenge.delete({
    where: { id },
  })
}
