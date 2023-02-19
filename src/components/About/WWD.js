import { FaArrowRight } from "react-icons/fa";
import wwd from "../../assets/imgs/about_page/wwd.jpg";
import result from "../../assets/imgs/about_page/result.jpg";

function WWD() {
  return (
    <section id="wwd">
      <div className="row flex wrap justify-center align-center">
        <div className="text">
          <h3>What We Do</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <a href="" className="button flex align-center justify-center">
            Our Concept <FaArrowRight />
          </a>
        </div>
        <div className="img">
          <img src={wwd} alt="What We Do" />
        </div>
      </div>
      <div className="row row-reverse flex wrap justify-center align-center">
        <div className="text">
          <h3>The End Result</h3>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
          </p>
          <a href="/projects" className="button flex align-center justify-center">Our Portfolio <FaArrowRight /></a>
        </div>
        <div className="img">
          <img src={result} alt="Result" />
        </div>
      </div>
    </section>
  );
}

export default WWD;
