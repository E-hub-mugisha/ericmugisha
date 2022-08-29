import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faGithub, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';


const footer = () => {
  return (
    <div>
      <footer class="bg-white text-center text-black">
        <div class="container p-4 pb-0">
          <section class="mb-4 font-footer" id="social">
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a class="btn btn-outline-black btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </section>
        </div>
        <div class="text-center p-3 footer-bottom">
          © 2021 Copyright:&nbsp;Designed by |
          <a class=" footer-kab" href="#"> kabosi erik</a>
        </div>
        <div class="scroll-top-wrapper ">
          <span class="scroll-top-inner">
            <i class="fa fa-2x fa-arrow-circle-up"></i>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default footer
