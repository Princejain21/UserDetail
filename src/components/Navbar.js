import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <p className="navbar-brand" >Navbar</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/UserDetail">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/table">Table</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
