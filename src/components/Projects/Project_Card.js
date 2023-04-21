import React from "react";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

function Project_Card({ details, subURL }) {
  return (
    <div className={"card " + details.class}>
      <div className="image">
        <img src={details.url} alt={details.title} />
        <Link key={details.slug} to={`/projects/${subURL}/${details.slug}`}>
          <div className="overlay"></div>
        </Link>
      </div>
      <div className="details flex justify-between align-center">
        <div className="text">
          <Link key={details.slug} to={`/projects/${subURL}/${details.slug}`}>
            <h4>{details.title}</h4>
          </Link>

          <Link key={details.slug} to={`/projects/${subURL}/${details.slug}`}>
            <p>{details.text}</p>
          </Link>
        </div>
        <div className="icon">
          <Link key={details.slug} to={`/projects/${subURL}/${details.slug}`}>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project_Card;
