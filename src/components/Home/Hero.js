import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="full-width flex align-center">
      <div className="inner">
        <h1>Let Your Home Be Unique</h1>
        <p>
          There are many variations of the passages of lorem Ipsum
          from available,variations of the passages.
        </p>
        <button className="flex align-center justify-between">Get Started <FaArrowRight /></button>
      </div>
    </section>
  );
}

export default Hero;
