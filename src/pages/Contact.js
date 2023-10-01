import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Mohamed Elsoudy via email @ Muhammed.elsoudy@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Have any questions or inquiries? I would love to hear from you! Feel free to get in touch
          with me using the contact information provided below.
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
