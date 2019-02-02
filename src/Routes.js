import React from 'react'
import Home from '../src/components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GameHomeScreen from './components/GameOfLife/GameHome'
import IndecisionMain from '../src/components/Indecision/src/app'
import WeatherHome from './components/Weather/WeatherHome'

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gamehomescreen" component={GameHomeScreen} />
        <Route exact path="/indecision" component={IndecisionMain} />
        <Route exact path="/weather" component={WeatherHome} />
        
      </Switch>
  </BrowserRouter>
)

export default AppRouter