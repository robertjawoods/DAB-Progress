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
import type { LessonsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query LessonsQuery {
    lessons {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ lessons }: CellSuccessProps<LessonsQuery>) => {
  return (
    <TableContainer>
      <Table variant={'simple'}>
        <TableCaption>Lessons Completed</TableCaption>
        <Thead>
          <Tr>
            <Th>Lesson Name</Th>
            <Th>Completed Date</Th>
            <Th>Completed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {lessons.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>

    // <UnorderedList pl={'1em'} pt={'1em'} listStyleType={'none'}>
    //   {lessons.map((item) => {
    //     return <ListItem key={item.id}>{item.name}</ListItem>
    //   })}
    // </UnorderedList>
  )
}
