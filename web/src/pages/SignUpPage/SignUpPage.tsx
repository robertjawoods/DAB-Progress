import { SignUp } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="Sign Up" description="SignUp page" />
      <br />

      <SignUp />
    </>
  )
}

export default SignUpPage
