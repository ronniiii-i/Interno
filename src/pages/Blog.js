import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { FaChevronRight } from "react-icons/fa";
import Banner from "../components/Banner";
import Card from "../components/Blog/Card";
import Paginate from "../components/Blog/Paginate";

function Blog() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setSelectedPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      setSelectedPage(currentPage + 1);
    }
  };

  return (
    <main>
      <Banner classn="blog" title="Articles & News" name="Blog" url="/blog" />

      <section id="latest">
        <div className="inner">
          <h2>Latest Post</h2>

          {isLoading ? (
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
            data.slice(0, 1).map((item) => (
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
            ))
          )}
        </div>
      </section>

      <section id="blog">
        <div className="inner flex column align-center justtify-center">
          <div className="head">
            <h2>Articles & News</h2>
          </div>
          <div className="row flex justify-center wrap">
            {isLoading ? (
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
              currentPosts.slice(1).map((item) => (
                // <div key={item.uuid}>
                //   <h4>{item.post_title}</h4>
                //   <p>{item.desc}</p>
                // </div>
                <Card details={item} />
              ))
            )}
          </div>
        </div>
      </section>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        selectedPage={selectedPage}
      />
    </main>
  );
}

export default Blog;
