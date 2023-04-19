import React from "react";
import { useParams } from "react-router-dom";

import bathroom from "../assets/data/projects_bathroom";
import bedroom from "../assets/data/projects_bedroom";
import kitchen from "../assets/data/projects_kitchen";
import living from "../assets/data/projects_living";

function Project_Details() {
  const { category, itemId } = useParams();
    console.log(category, itemId, typeof(itemId));
  let projectData = "";

  switch (category) {
    case 'bathroom':
      projectData = bathroom.find(item => item.id == itemId);
      break;
    case 'bedroom':
      projectData = bedroom.find(item => item.id == itemId);
      break;
    case 'kitchen':
      projectData = kitchen.find(item => item.id == itemId);
      break;
    case 'living':
      projectData = living.find(item => item.id == itemId);
      break;
    default:
      projectData = null;
  }

  if (projectData === null || projectData === undefined) {
    console.log(category);
    return <div>Project not found</div>;
  } else {
    return (
      <main>
        <h1>Project Details</h1>
        <p>Category: {category}</p>
        <p>Item ID: {itemId}</p>

        <h2>{projectData.title}</h2>
        <img src={projectData.url} alt={projectData.title} />
        <p>{projectData.description}</p>
        {/* Render the project details */}
      </main>
    );
  }
}

export default Project_Details;
