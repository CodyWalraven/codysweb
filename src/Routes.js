import React from 'react'
import Home from '../src/components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GameHomeScreen from './components/GameOfLife/GameHome'
import IndecisionMain from '../src/components/Indecision/src/app'

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gamehomescreen" component={GameHomeScreen} />
        <Route exact path="/indecision" component={IndecisionMain} />
      </Switch>
  </BrowserRouter>
)

export default AppRouter