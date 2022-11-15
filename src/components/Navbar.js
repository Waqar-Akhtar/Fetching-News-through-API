
// import PropTypes from 'prop-types'
import {
Link
} from "react-router-dom";

import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      
      <Link className="navbar-brand " to="/" style={{ fontFamily:'Parisienne' ,fontSize: '30px' ,marginRight:'30px'}}>
           <strong> Fresh News</strong>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
     
      <div className="collapse navbar-collapse mx-10 " id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{border: `1px solid ${props.mode==='dark' ? 'white': 'none'}`, borderRadius: '20px', padding: '2px 4px'}}>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
              Home
            </Link>
          </li>
          
          <li className="nav-item"><Link  className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/entertainment">Entertaiment</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/technology">Technology</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/health">Health</Link></li>
        </ul>
        
           <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} `} type="submit">Search</button>
        </form>
      
        </div>
      
    </div>
  </nav>
  )
}

 Navbar.defaultProps ={
  mode: 'dark'
}