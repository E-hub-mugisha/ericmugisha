import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="container">
          <h3>Eric Mugisha</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div class="social-links">
            <a href="#" class="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="#" class="facebook"><FontAwesomeIcon icon={faFacebookF}/></a>
            <a href="#" class="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#" class="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="#" class="github"><FontAwesomeIcon icon={faGithub}/></a>
          </div>
          <div class="copyright">
            &copy; Copyright 
            <strong>
              <span>2020</span>
            </strong>. All Rights Reserved
          </div>
          <div class="credits">Designed by <a href="#">Me</a>
          </div>
        </div>
      </footer>
    </div>

  )

  
}

export default footer
