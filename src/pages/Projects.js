import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

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
  const [selectedOption, setSelectedOption] = useState("bedroom");

  const { category } = useParams();
  console.log(category);

  if (category) {
    switch (category) {
      case "bathroom":
        setActiveLink(0);
        break;
      case "bedroom":
        setActiveLink(1);
        break;
      case "kitchen":
        setActiveLink(2);
        break;
      case "living-area":
        setActiveLink(3);
        break;
      default:
        setActiveLink(1);
    }
  }

  const options = ["bathroom", "bedroom", "kitchen", "livingarea"];

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setSelectedOption(options[index]);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "bathroom":
        setActiveLink(0);
        break;
      case "bedroom":
        setActiveLink(1);
        break;
      case "kitchen":
        setActiveLink(2);
        break;
      case "living-area":
        setActiveLink(3);
        break;
      default:
        setActiveLink(1);
    }
  };

  useEffect(() => {
    let data;
    setLoading(true);
    if (activeLink === 0) {
      data = bathroom;
    } else if (activeLink === 1) {
      data = bedroom;
    } else if (activeLink === 2) {
      data = kitchen;
    } else if (activeLink === 3) {
      data = living;
    }

    setData(data);
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
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
              <option value="bathroom">Bathroom</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="living-area">Living Area</option>
            </select>
          </div>
          <div className="content flex justify-center  wrap">
            {loading ? (
              <ThreeCircles
                height="100"
                width="100"
                color="#CDA274"
                wrapperStyle={{}}
                wrapperClass="loader"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            ) : (
              <>
                {data.map((item) => (
                  <Card key={item.id} details={item} subURL={selectedOption} />
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
