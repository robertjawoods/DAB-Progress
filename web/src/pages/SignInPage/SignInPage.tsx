import { SignIn } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

const SignInPage = () => {
  return (
    <>
      <MetaTags title="Sign In" description="SignIn page" />

      <br />

      <SignIn redirectUrl="/dashboard" />
    </>
  )
}

export default SignInPage
