import pro1 from "../../assets/imgs/pro1.png";
import pro2 from "../../assets/imgs/pro2.png";
import pro3 from "../../assets/imgs/pro3.png";
import pro4 from "../../assets/imgs/pro4.png";
import { FaChevronRight } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="flex align-center justify-center">
      <div className="inner flex column align-center">
        <div className="head">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="projects flex wrap justify-center">
          <div className="column">
            <div className="image">
              <img src={pro1} alt="Project" />
            </div>
            <div className="description flex justify-between align-center">
              <div className="title">
                <strong>Modern Kitchen</strong>
                <p>Decor / Architecture</p>
              </div>
              <FaChevronRight />
            </div>
          </div>
          <div className="column">
            <div className="image">
              <img src={pro2} alt="Project" />
            </div>
            <div className="description flex justify-between align-center">
              <div className="title">
                <strong>Modern Kitchen</strong>
                <p>Decor / Architecture</p>
              </div>
              <FaChevronRight />
            </div>
          </div>
          <div className="column">
            <div className="image">
              <img src={pro3} alt="Project" />
            </div>
            <div className="description flex justify-between align-center">
              <div className="title">
                <strong>Modern Kitchen</strong>
                <p>Decor / Architecture</p>
              </div>
              <FaChevronRight />
            </div>
          </div>
          <div className="column">
            <div className="image">
              <img src={pro4} alt="Project" />
            </div>
            <div className="description flex justify-between align-center">
              <div className="title">
                <strong>Modern Kitchen</strong>
                <p>Decor / Architecture</p>
              </div>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
