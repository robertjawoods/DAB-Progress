import { render } from '@redwoodjs/testing/web'

import WarmupPage from './WarmupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WarmupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WarmupPage />)
    }).not.toThrow()
  })
})
