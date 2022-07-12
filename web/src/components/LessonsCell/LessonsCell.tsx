import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import type { LessonsQuery } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query LessonsQuery {
    lessons {
      id
      name
    }
  }
`
const updateLesson = (lessonId, userId) => {
  console.log(lessonId, userId)
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ lessons }: CellSuccessProps<LessonsQuery>) => {
  const { userMetadata } = useAuth()

  return (
    <TableContainer>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            <Th>Lesson Name</Th>
            <Th>Completed Date</Th>
            <Th>Read Text</Th>
            <Th>Watched Video</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lessons.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>N/A</Td>
                <Td>
                  <Checkbox
                    onChange={() => updateLesson(item.id, userMetadata.id)}
                  />
                </Td>
                <Td>
                  <Checkbox
                    onChange={() => updateLesson(item.id, userMetadata.id)}
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
