import React from 'react'
import Home from '../src/components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  </BrowserRouter>
)

export default AppRouter