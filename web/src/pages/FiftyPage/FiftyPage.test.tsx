import { render } from '@redwoodjs/testing/web'

import FiftyPage from './FiftyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FiftyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FiftyPage />)
    }).not.toThrow()
  })
})
