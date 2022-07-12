import type { FindLessonsCompletedQuery, FindLessonsCompletedQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindLessonsCompletedQuery($id: Int!) {
    lessonsCompleted: lessonsCompleted(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLessonsCompletedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  lessonsCompleted,
}: CellSuccessProps<FindLessonsCompletedQuery, FindLessonsCompletedQueryVariables>) => {
  return <div>{JSON.stringify(lessonsCompleted)}</div>
}
