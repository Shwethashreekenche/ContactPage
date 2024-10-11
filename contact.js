import React from 'react'
import './contact.css';
const contact = () => {
  return (
    <div class="contain">
      <form action="https://formspree.io/f/xvgoparz" method="post">
        <div class="form-title">
          <label for="name">Contact Us</label>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email Id"/>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" required placeholder="Your Message here..."></textarea>
        </div>
        <div class="form-group">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default contact