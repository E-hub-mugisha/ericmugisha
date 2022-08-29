import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hey folks, I'm</h1>
                <Typed
                  className="typed-text"
                  strings={["Web Designer", "Graphics Designer", "IT Services"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
                <a href="https://drive.google.com/file/d/1vPFTtx25MeU3swXJvBl0yqfiz6j7rHM0/view?usp=sharing" className="btn-main-offer"><FontAwesomeIcon icon={faDownload}/>Download CV!</a>
            </div>
        </div>
    )
}

export default Header
