import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Banner from "../components/Banner";
import Card from "../components/Blog/Card";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts")
      .then((response) => response.json())
      .then((data) => {
        // Sort data by date in descending order
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        // Remove the first item from the array
        // const filteredData = data.slice(1);
        // Set component state with the filtered data
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Banner classn="blog" title="Articles & News" name="Blog" url="/blog" />

      <section id="latest">
        <div className="inner">
          <h2>Latest Post</h2>
          {data.slice(0, 1).map((item) => (
            <div
              key={item.uuid}
              className="widget flex align-center justify-center wrap"
            >
              <Link
                to={`/blog/${item.slug}`}
                className="img flex align-center justify-center"
              >
                <img src={item.img_url} alt={item.post_title} />
                <div className="overlay"></div>
              </Link>
              <div className="text">
                <Link to={`/blog/${item.slug}`}>
                  <h4>{item.post_title}</h4>
                </Link>
                <p>{item.desc}</p>
                <div className="row flex align-center justify-between">
                  <p>
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <Link to={`/blog/${item.slug}`}>
                    <FaChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="blog">
        <div className="inner flex column align-center justtify-center">
          <div className="head">
            <h2>Articles & News</h2>
          </div>
          <div className="row flex justify-center wrap">
            {data.slice(1).map((item) => (
              // <div key={item.uuid}>
              //   <h4>{item.post_title}</h4>
              //   <p>{item.desc}</p>
              // </div>
              <Card details={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
