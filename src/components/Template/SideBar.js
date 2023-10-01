import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mohamed Elsoudy</h2>
        <p><a href="mailto:Muhammed.elsoudy@gmail.com">Muhammed.elsoudy@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi. I am Mohamed. I graduated from faculty of pharmacy Pharos University with cGPA
        3.73/4 (Excellent with
        honor). Now, I am a postgraduate student in Master of Pharmaceutical Management,
        Tanta University with
        current GPA 4.94/5 (Excellent with honor. I work as hospital pharmacist in
        Alexandria University
        Hospitals and project executive in Healthcare Organization of Professional
        Development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume')
            ? <Link to="/resume" className="button">Learn More</Link>
            : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mohamed Elsoudy <Link to="/">drsoudy.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
