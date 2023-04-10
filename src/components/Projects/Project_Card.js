import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

function Project_Card({ details }) {
  return (
    <div className={'card ' + details.class}>
        <div className="image">
            <img src={details.url} alt={details.title} />
        </div>
        <div className="details flex justify-between align-center">
            <div className="text">
                <h4>{details.title}</h4>
                <p>{details.text}</p>
            </div>
            <div className="icon">
                <FaChevronRight />
            </div>
        </div>
    </div>
  )
}

export default Project_Card