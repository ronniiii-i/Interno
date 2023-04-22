import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ details }) {
  return (
    <div className="column by-3">
      <div className="image">
        <Link
          to={`/blog/${details.slug}`}
          className="flex justify-between align-center full-width"
        >
          <img src={details.img_url} alt={details.post_title} />
        </Link>
        <p>{details.category}</p>
      </div>
      <Link to={`/blog/${details.slug}`}>
        <h3>{details.post_title}</h3>
      </Link>
      <div className="flex justify-between align-center">
        <small>
          {new Date(details.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </small>
        <Link to={`/blog/${details.slug}`}>
          <FaChevronRight />
        </Link>
      </div>
    </div>
  );
}

export default Card;
