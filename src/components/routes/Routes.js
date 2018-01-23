import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import NotFoundPage from '../pages/NotFoundPage'

class Routes extends Component {
  componentDidMount() {
    //bellow set for testing purpose
    localStorage.setItem('authenticated', 'true')
    localStorage.getItem('authenticated')
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    if (!localStorage.getItem('authenticated')) {
      return <Redirect to="/" push />
    }

    return (
      <Switch>
        <Route path="/home" component={Home} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
export default Routes
