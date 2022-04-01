import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/section1/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Result from './components/section2/Result'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/UserDetail">
          <Form />
          </Route>
        </Switch>
        <Route exact path='/table'>
          <Result/>
        </Route>
      </Router>
    </div>
  )
}
