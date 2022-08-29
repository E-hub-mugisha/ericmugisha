import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faUser, faTools, faToggleOn, faCog, faCalendarAlt, faDownload } from '@fortawesome/free-solid-svg-icons'


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
                  <a className="nav-link" href="#home"><FontAwesomeIcon icon={faHome}/>&nbsp;Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about"><FontAwesomeIcon icon={faUser}/>&nbsp;About me!</a>
                </li>
                <li className="nav-item">
                  < a className="nav-link" href="#resume"><FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service"><FontAwesomeIcon icon={faTools}/>&nbsp;Services</a>
                </li>
                <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="nav-link" href="#project"><FontAwesomeIcon icon={faCog}/>&nbsp;Project</a>
                  <a className="nav-link" href="#social"><FontAwesomeIcon icon={faCog}/>&nbsp;Social Medias</a>
                  </div>
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact"><FontAwesomeIcon icon={faPhone}/>&nbsp;contact me!</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
