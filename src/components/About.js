import React from 'react';
import Me from '../images/me.jpg';

export const About = () => (
  <section className="About">
    <header className="About-title">
      <h1>
        ABOUT <br /> ME
      </h1>
      <div className="About-img-container">
        <div className="img-frame">
          <img src={Me} alt="Carlos smiling" />
          <article className="frames">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </div>
        <span>
          Coded with <span className="special">love</span> by Carlos Medina
        </span>
      </div>
    </header>
    <div className="About-body">
      <h5>
        Hi I’m Carlos Medina, <br />a Web Designer
        <span className="special"> &</span> Developer
      </h5>
      <p>
        I’m a Frontend designer based in Charlotte currently in freelancing and
        learning new concepts and tools. Starting off with a focus on technology
        and art, I followed my passion to enrich my skillsets and then dabbled
        into somewhere between web technology, screen art and interface
        animations by self-motivated learning. Throughout my career as an
        independent creator, I wear different hats to bring digital experiences
        to life across a variety of design spectrums.
      </p>
    </div>
    <footer className="About-footer">
      <a href="mailto:carlos.w.med@gmail.com">Email</a>
      <span className="About-seperator" />
      <a href="https://www.linkedin.com/in/carlosmed/">LinkedIn</a>
      <span className="About-seperator" />
      <a href="https://www.github.com/carlosmed/">Github</a>
      <span className="About-seperator" />
      <a href="https://www.codepen.com/carlosmed/">Codepen</a>
    </footer>
  </section>
);
