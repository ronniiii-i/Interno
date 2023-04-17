import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from 'react-icons/bs'
import about from '../../assets/imgs/about.jpg'

function About() {
  return (
    <section id="about" className='flex align-center justify-center'>
      <div className="inner flex justify-center align-center wrap">
        <div className="text">
          <div className="widget">
          <h2>
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
          </p>
          <div className="contact flex align-center">
            <div className="phone flex align-center justify-center"><BsTelephone /></div>
            <div className="number">
              <strong>012345678</strong>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <button className="flex justify-between align-center">Get Free estimate <FaArrowRight /></button>
          </div>
        </div>
        <div className="img">
          <img src={about} alt="Interno Modern Kitchen" />
        </div>
      </div>
    </section>
  )
}

export default About