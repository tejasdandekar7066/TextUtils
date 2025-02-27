import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'
export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==="dark"?"dark":"light"} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* props  */}
    <a className="navbar-brand" href ="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* if you wan't  you use  routing in home and about use  Link not a */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href ="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href ="/about">{props.aboutText}</a>
        </li>
    
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
        <button className="btn btn-outline-success" type="submit">Search</button>
            
          </div>
      </form> */}
                <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable light mode</label>
            </div>
    </div>
  </div>
</nav>
  )
}
// prototypes
Navbar.prototype = {title:PropTypes.string.isRequired,
        aboutText: PropTypes.string
}
// default props
Navbar.defaultProps = {
    title: "default title" ,
        aboutText: "tu janta he mere bare me"
}