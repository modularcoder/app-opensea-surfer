import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppFooter from './_common/AppFooter/AppFooter'
import AppHeader from './_common/AppHeader/AppHeader'

import AssetPage from './AssetPage/AssetPage'
import BundlePage from './BundlePage/BundlePage'
import MainPage from './MainPage/MainPage'

export const App = () => {
  return (
    <Router>
      <div
        className="
          App min-h-screen w-full relative flex flex-col
          text-white
        "
      >
        <AppHeader />
        <div className="container mx-auto text-center flex flex-col flex-1 p-8 justify-center items-center ">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/assets/:assetId">
              <AssetPage />
            </Route>
            <Route path="/bundles/:bundleSlug">
              <BundlePage />
            </Route>
          </Switch>
        </div>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
