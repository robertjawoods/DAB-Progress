import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LessonsPage = () => {
  return (
    <>
      <MetaTags title="Lessons" description="Lessons page" />

      <h1>LessonsPage</h1>
      <p>
        Find me in <code>./web/src/pages/LessonsPage/LessonsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>lessons</code>, link to me with `
        <Link to={routes.lessons()}>Lessons</Link>`
      </p>
    </>
  )
}

export default LessonsPage
