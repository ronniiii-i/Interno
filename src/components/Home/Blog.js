import blog1 from "../../assets/imgs/blog1.png";
import blog2 from "../../assets/imgs/blog2.png";
import blog3 from "../../assets/imgs/blog3.png";
import { FaChevronRight } from "react-icons/fa";

function Blog() {
  return (
    <section id="blog" className="flex align-center justify-center">
      <div className="inner flex column align-center justify-center">
        <div className="head">
          <h2>Articles & News</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div className="row flex justify-center wrap">
          <div className="column by-3">
            <div className="image">
              <img src={blog1} alt="Banner" />
              <p>Kitchen Design</p>
            </div>
            <h3>Let’s Get Solution For Building Construction Work</h3>
            <div className="flex justify-between align-center">
              <small>26 December 2022</small>
              <FaChevronRight />
            </div>
          </div>
          <div className="column by-3">
            <div className="image">
              <img src={blog2} alt="Banner" />
              <p>Living Design</p>
            </div>
            <h3>Low Cost Latest Invented Interior Designing Ideas.</h3>
            <div className="flex justify-between align-center">
              <small>22 December 2022</small>
              <FaChevronRight />
            </div>
          </div>
          <div className="column by-3">
            <div className="image">
              <img src={blog3} alt="Banner" />
              <p>Interior Design</p>
            </div>
            <h3>Best For Any Office & Business Interior Solution</h3>
            <div className="flex justify-between align-center">
              <small>25 December 2022</small>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
