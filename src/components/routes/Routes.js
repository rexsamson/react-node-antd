import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import NotFoundPage from '../pages/NotFoundPage'

class Routes extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
export default Routes
