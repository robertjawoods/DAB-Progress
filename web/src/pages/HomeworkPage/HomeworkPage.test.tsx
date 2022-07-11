import { render } from '@redwoodjs/testing/web'

import HomeworkPage from './HomeworkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeworkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeworkPage />)
    }).not.toThrow()
  })
})
