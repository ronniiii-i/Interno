import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { useParams } from "react-router-dom";

import bathroom from "../assets/data/projects_bathroom";
import bedroom from "../assets/data/projects_bedroom";
import kitchen from "../assets/data/projects_kitchen";
import living from "../assets/data/projects_living";

function Project_Details() {
  const { category, itemId } = useParams();
  console.log(category, itemId, typeof itemId);
  let projectData = "";

  switch (category) {
    case "bathroom":
      projectData = bathroom.find((item) => item.id == itemId);
      break;
    case "bedroom":
      projectData = bedroom.find((item) => item.id == itemId);
      break;
    case "kitchen":
      projectData = kitchen.find((item) => item.id == itemId);
      break;
    case "living":
      projectData = living.find((item) => item.id == itemId);
      break;
    default:
      projectData = null;
  }

  const tags = projectData.tags.join(", ");

  if (projectData === null || projectData === undefined) {
    console.log(category);
    return <div>Project not found</div>;
  } else {
    return (
      <main>
        <section id="bannerImg"></section>
        <section id="content">
          <div className="inner">
            <div className="project_details flex align-center justify-center wrap">
              <div className="project_data">
                <strong>Client</strong>
                <p>{projectData.clientName}</p>
                <strong>Category</strong>
                <p>{projectData.category}</p>
                <strong>Tags</strong>
                <p>{tags}</p>
                <strong>Date</strong>
                <p>{projectData.date}</p>
                <strong>Link</strong>
                <a href={projectData.pageLink}>{projectData.pageLink}</a>
              </div>
              <div className="project">
                <h2>{projectData.title}</h2>
                <p>
                  {projectData.desc.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="images flex align-center justify-center">
              <img src={projectData.url} alt={projectData.title} />
              <div className="back flex align-center justify-center">
                <MdOutlineSearch />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Project_Details;
