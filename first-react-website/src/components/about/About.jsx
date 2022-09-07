import React from 'react'
import "./about.css"
import Me from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { HiOutlineUsers } from "react-icons/hi"
import { BsFillFolderSymlinkFill } from "react-icons/bs"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 + Experience</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200 + Worldwide</small>
            </article>

            <article className="about__card">
              <BsFillFolderSymlinkFill className='about__icon' />
              <h5>Experience</h5>
              <small>80 + Completed</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, itaque numquam qui ipsum quas provident magnam et harum est minus quidem ad aliquam aspernatur excepturi in id? Soluta praesentium recusandae maxime perferendis atque consectetur deleniti, debitis aliquam perspiciatis neque accusamus reiciendis quasi voluptatum voluptatibus quia incidunt, repellat dolor maiores est delectus consequatur voluptatem esse! Fugiat voluptatum ex est sed facilis.</p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About