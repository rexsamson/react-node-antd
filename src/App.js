import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/antd.css'
import './styles/App.css'
import Top from './components/layout/Top'
import Nav from './components/layout/Nav'
import Routes from './components/routes/Routes'
import Bottom from './components/layout/Bottom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Top />
            <Nav />
            <Routes />
            <Bottom />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
