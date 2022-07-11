import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ChallengesPage = () => {
  return (
    <>
      <MetaTags title="Challenges" description="Challenges page" />

      <h1>ChallengesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChallengesPage/ChallengesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>challenges</code>, link to me with `
        <Link to={routes.challenges()}>Challenges</Link>`
      </p>
    </>
  )
}

export default ChallengesPage
