import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/section1/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Result from './components/section2/Result'
import DoneMsg from './components/section1/DoneMsg'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/UserDetail">
            <Form />
          </Route>
          <Route exact path='/table'>
            <Result />
          </Route>
            <Route exact path='/confirm'>
            <DoneMsg />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}
