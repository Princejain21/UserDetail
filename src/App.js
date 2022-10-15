import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/section1/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import DoneMsg from './components/section1/DoneMsg'
import Result from './components/section3/Result'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/UserDetail">
            <Form />
          </Route>
            <Route exact path='/confirm'>
            <DoneMsg />
          </Route>
            <Route exact path='/result'>
            <Result />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}
