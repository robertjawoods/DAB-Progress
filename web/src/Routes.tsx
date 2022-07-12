// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Private unauthenticated="home">
          <Route path="/fifty" page={FiftyPage} name="fifty" />
          <Route path="/warmup" page={WarmupPage} name="warmup" />
          <Route path="/challenges" page={ChallengesPage} name="challenges" />
          <Route path="/lessons" page={LessonsPage} name="lessons" />
          <Route path="/homework" page={HomeworkPage} name="homework" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Private>

        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/login" page={SignInPage} name="signIn" />
        <Route path="/signup" page={SignUpPage} name="signUp" />
        <Route path="/privacy" page={PrivacyPolicyPage} name="privacyPolicy" />
      </Set>
    </Router>
  )
}

export default Routes
