import { render } from '@redwoodjs/testing/web'

import LessonsPage from './LessonsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LessonsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LessonsPage />)
    }).not.toThrow()
  })
})
