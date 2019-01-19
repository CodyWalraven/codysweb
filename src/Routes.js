import React from 'react'
import Home from '../src/components/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter