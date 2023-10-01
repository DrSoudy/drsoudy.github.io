import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Hi. I am Mohamed. I graduated from faculty of pharmacy Pharos University with cGPA 3.73/4
  (Excellent with honor). Now, I am a postgraduate student in Master of Pharmaceutical Management, Tanta University
  with current GPA 4.94/5 (Excellent with honor. I work as hospital pharmacist in Alexandria University Hospitals
  and project executive in Healthcare Organization of Professional Development."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
        </div>
      </header>
      <p>
        Driven professional with exemplary organization, problem solving, and critical thinking
        skills. Expert
        in selling products and scheduling appointments with doctors. Adept in cultivating
        relationships with
        healthcare professionals to meet demands and establish rapport with hard working
        individuals, eager to
        continue my career. I possess strong communication and interpersonal skills.
      </p>
      <p>
        Willing to take challenging work to meet demands. Hard worker pharmacist with experience
        in both
        community and hospital pharmacy. Smart and productive sales representative with 5 years
        of experience in
        different areas (Pharma, prophylactic nutrition, cosmetics, perfume industry, herbals)
        in local,
        multinational companies and as a freelancer independent (Agency and distribution of my
        own).
      </p>
      <p>
        Passionate sales rep with extensive experience building profitable, loyal customer
        bases, passionate
        and motivated to engage and retain high-spending clients. Being a quick learner with an
        analytical
        mind is the key to my success, acting for change and striving for results specially with
        launching products.
      </p>
      <p> Please feel free to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        view <Link to="/stats">statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>);

export default Index;
