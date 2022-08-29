import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faUser, faTools, faToggleOn, faCog } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h1 className="logo">kantion.</h1>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faToggleOn}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome}/>&nbsp;Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser}/>&nbsp;About me!</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faTools}/>&nbsp;Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faCog}/>&nbsp;Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FontAwesomeIcon icon={faPhone}/>&nbsp;contact me!</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
