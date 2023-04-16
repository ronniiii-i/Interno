import React, { useState, useEffect } from "react";

import Banner from "../components/Banner";
import Card from "../components/Projects/Project_Card";
import bathroom from "../assets/data/projects_bathroom";
import bedroom from "../assets/data/projects_bedroom";
import kitchen from "../assets/data/projects_kitchen";
import living from "../assets/data/projects_living";

function Projects() {
  const [activeLink, setActiveLink] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Bedroom");

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "Bathroom":
        setActiveLink(0);
        break;
      case "Bedroom":
        setActiveLink(1);
        break;
      case "Kitchen":
        setActiveLink(2);
        break;
      case "Living Area":
        setActiveLink(3);
        break;
      default:
        setActiveLink(1);
    }
  };

  useEffect(() => {
    let data;
    if (activeLink === 0) {
      data = bathroom;
    } else if (activeLink === 1) {
      data = bedroom;
    } else if (activeLink === 2) {
      data = kitchen;
    } else if (activeLink === 3) {
      data = living;
    }

    setTimeout(() => {
      setData(data);
      setLoading(false);
    }, 200);
  }, [activeLink]);

  return (
    <main>
      <Banner
        title={"Our Project"}
        name="Project"
        url={"/projects"}
        classn="projects"
      />
      <section id="projects">
        <div className="inner">
          <div className="select">
            <ul className="flex align-center justify-center">
              <li
                className={activeLink === 0 ? "active" : ""}
                onClick={() => handleLinkClick(0)}
              >
                <a>Bathroom</a>
              </li>
              <li
                className={activeLink === 1 ? "active" : ""}
                onClick={() => handleLinkClick(1)}
              >
                <a>Bedroom</a>
              </li>
              <li
                className={activeLink === 2 ? "active" : ""}
                onClick={() => handleLinkClick(2)}
              >
                <a>Kitchen</a>
              </li>
              <li
                className={activeLink === 3 ? "active" : ""}
                onClick={() => handleLinkClick(3)}
              >
                <a>Living Area</a>
              </li>
              <li className="slide"></li>
            </ul>
            <select
              id="select"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="Bathroom">Bathroom</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Living Area">Living Area</option>
            </select>
          </div>
          <div className="content flex justify-center  wrap">
            {loading ? (
              <div className="loader">Loading...</div>
            ) : (
              <>
                {data.map((item) => (
                  <Card key={item.id} details={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
