import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

function Project_Card({ details, subURL }) {
  return (
    <div className={"card " + details.class}>
      <div className="image">
        <img src={details.url} alt={details.title} />
        <Link key={details.id} to={`/projects/${subURL}/${details.id}`}>
          <div className="overlay"></div>
        </Link>
      </div>
      <div className="details flex justify-between align-center">
        <div className="text">
          <Link key={details.id} to={`/projects/${subURL}/${details.id}`}>
            <h4>{details.title}</h4>
          </Link>

          <Link key={details.id} to={`/projects/${subURL}/${details.id}`}>
            <p>{details.text}</p>
          </Link>
        </div>
        <div className="icon">
          <Link key={details.id} to={`/projects/${subURL}/${details.id}`}>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project_Card;
