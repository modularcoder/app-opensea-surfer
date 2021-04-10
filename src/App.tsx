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
          App h-screen w-full relative flex flex-col
          text-white bg-gradient-to-br from-blue-300 to-indigo-500
        "
      >
        <AppHeader />
        <div className="container mx-auto text-center flex flex-col flex-1 p-8 justify-center items-center ">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/book/:bookId">
              <p className="text-shadow text-xl">@ToDo: Single Book page</p>
            </Route>
            <Route path="/checkout">
              <p className="text-shadow text-xl">@ToDo: Checkout page</p>
            </Route>
            <Route path="/auth">
              <p className="text-shadow text-xl">@ToDo: Auth page</p>
            </Route>
            <Route path="/orders">
              <p className="text-shadow text-xl">@ToDo: Orders page</p>
            </Route>
          </Switch>

          <nav className="p-8">
            <Link to="/" className="mx-2">
              Main page
            </Link>
            <Link to="/book/1" className="mx-2">
              Book page
            </Link>
            <Link to="/checkout" className="mx-2">
              Checkout page
            </Link>
            <Link to="/auth" className="mx-2">
              Auth page
            </Link>
            <Link to="/orders" className="mx-2">
              Orders page
            </Link>
          </nav>
        </div>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
