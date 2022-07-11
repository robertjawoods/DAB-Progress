import { render } from '@redwoodjs/testing/web'

import ChallengesPage from './ChallengesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChallengesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChallengesPage />)
    }).not.toThrow()
  })
})
