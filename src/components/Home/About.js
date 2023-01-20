import React from 'react'
import about from '../../assets/imgs/about.jpg'

function About() {
  return (
    <section id="about">
      <div className="inner flex">
        <div className="text">
          <h2>
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
          </p>
          <div className="contact flex justify-between">
            <div className="phone"></div>
            <div className="number">
              <strong>012345678</strong>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <button>Get Free estimate (arrow right)</button>
        </div>
        <div className="img">
          <img src={about} alt="Interno Modern Kitchen" />
        </div>
      </div>
    </section>
  )
}

export default About