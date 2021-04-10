import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AppFooter from './_common/AppFooter/AppFooter'
import AppHeader from './_common/AppHeader/AppHeader'

import MainPage from './MainPage/MainPage'

export const App = () => {
  return (
    <Router>
      <div
        className="
          App w-full relative flex flex-col
          text-white
        "
      >
        <AppHeader />
        <div className="container mx-auto text-center flex flex-col flex-1 p-8 justify-center items-center ">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/asset/:assetId">
              <p className="text-shadow text-xl">@ToDo: Single Asset page</p>
            </Route>
          </Switch>
        </div>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
