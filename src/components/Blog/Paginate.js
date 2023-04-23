import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  selectedPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="pagination-container">
      <ul className="pagination flex align-center justify-between">
        <li onClick={previousPage} className="page-number">
          <FaChevronLeft />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`page-number${
              selectedPage === number ? " selected" : ""
            }`}
          >
            {number < 10 ? `0${number}` : number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          <FaChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
