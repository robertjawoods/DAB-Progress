import LessonsCell from 'web/src/components/LessonsCell/LessonsCell'

import { MetaTags } from '@redwoodjs/web'

const LessonsPage = () => {
  return (
    <>
      <MetaTags title="Lessons" description="Lessons page" />

      <LessonsCell />
    </>
  )
}

export default LessonsPage
