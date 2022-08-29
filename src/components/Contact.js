import React from 'react'

const Contact = () => {
   return (
      <div>
         <section class="get-in-touch" id="contact">
            <h1 class="title">Get in touch</h1>
            <form class="contact-form row">
               <div class="form-field col-lg-6">
                  <input id="name" class="input-text js-input" type="text" required />
                  <label class="label" for="name">Name</label>
               </div>
               <div class="form-field col-lg-6 ">
                  <input id="email" class="input-text js-input" type="email" required />
                  <label class="label" for="email">E-mail</label>
               </div>
               <div class="form-field col-lg-6 ">
                  <input id="company" class="input-text js-input" type="text" required />
                  <label class="label" for="company">Company Name</label>
               </div>
               <div class="form-field col-lg-6 ">
                  <input id="phone" class="input-text js-input" type="text" required />
                  <label class="label" for="phone">Contact Number</label>
               </div>
               <div class="form-field col-lg-12">
                  <input id="message" class="input-text js-input" type="text" required />
                  <label class="label" for="message">Message</label>
               </div>
               <div class="form-field col-lg-12">
                  <input class="submit-btn" type="submit" value="Submit" />
               </div>
            </form>
         </section>
      </div>
   )
}


export default Contact
