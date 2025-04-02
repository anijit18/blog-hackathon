import React from 'react';
export default function ContactUs() {
  return (
    <form id="contact-form" className="contact-container">
      <h1>Contact us</h1>
      <input type="text" placeholder="Name" className="input-field" />
      <input type="text" placeholder="Email" className="input-field" />
      <textarea placeholder="Message" className="input-field" rows="4"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
    </form>
  );
}
