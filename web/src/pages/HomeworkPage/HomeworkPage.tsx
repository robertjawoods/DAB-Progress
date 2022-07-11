import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomeworkPage = () => {
  return (
    <>
      <MetaTags title="Homework" description="Homework page" />

      <h1>HomeworkPage</h1>
      <p>
        Find me in <code>./web/src/pages/HomeworkPage/HomeworkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>homework</code>, link to me with `
        <Link to={routes.homework()}>Homework</Link>`
      </p>
    </>
  )
}

export default HomeworkPage
