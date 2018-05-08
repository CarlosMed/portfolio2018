import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavList = () => (
  <section className="navlist">
    <p>
      <NavLink to="/" exact>~</NavLink>/
      <NavLink to="/work">work</NavLink>/
      <NavLink to="/about">about</NavLink>
    </p>
  </section>
);
