import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <section className="center Home">
    <div className="center outer-box">
      <h1>Carlos Medina</h1>
      <div className="box">
        <Link className="center" to="/work">
          Work
        </Link>
        <Link className="center" to="/about">
          About
        </Link>
      </div>
      <p>
        Web Designer <span className="special">&</span> Developer
      </p>
    </div>
  </section>
)
