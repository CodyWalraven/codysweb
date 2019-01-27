import React from 'react'
import Home from '../src/components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GameHomeScreen from './components/GameOfLife/GameHome'

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gamehomescreen" component={GameHomeScreen} />
      </Switch>
  </BrowserRouter>
)

export default AppRouter