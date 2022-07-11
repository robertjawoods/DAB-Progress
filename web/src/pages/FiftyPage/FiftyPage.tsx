import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FiftyPage = () => {
  return (
    <>
      <MetaTags title="Fifty" description="Fifty page" />

      <h1>FiftyPage</h1>
      <p>
        Find me in <code>./web/src/pages/FiftyPage/FiftyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>fifty</code>, link to me with `
        <Link to={routes.fifty()}>Fifty</Link>`
      </p>
    </>
  )
}

export default FiftyPage
