import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { FaChevronRight } from "react-icons/fa";
import Banner from "../components/Banner";
import Card from "../components/Blog/Card";
import Paginate from "../components/Blog/Paginate";

function Blog() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const filterData = (data) => {
    const category = queryParams.get("category");
    const date = queryParams.get("date");
    const tag = queryParams.get("tag");

    if (category) {
      return data.filter((post) => post.category === category);
    }

    if (date) {
      return data.filter((post) => post.date === date);
    }

    if (tag) {
      return data.filter((post) => post.tags.includes(tag));
    }

    return data;
  };

  const filteredData = filterData(data);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    filteredData.length > 0
      ? filteredData.slice(indexOfFirstPost, indexOfLastPost)
      : data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    // setIsLoading(true);
    let start;
    if (currentPage == 1) {
      start = (currentPage - 1) * postsPerPage;
    } else {
      start = ((currentPage - 1) * postsPerPage) - 1
    }
    const end = start + postsPerPage;
    const url = `https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Sort data by date in descending order
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage, postsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
    window.scrollTo(0, 0);
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

  console.log(currentPosts);
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
            ) : filteredData > 0 ? (
              currentPosts.map((item) => <Card key={item.uuid} details={item} />)
            ) : (
              currentPosts.map((item) => <Card key={item.uuid} details={item} />)
              // useEffect(() => {
              //   setPostsPerPage(7)
              //   currentPosts.slice(1).map((item) => <Card details={item} />)
              // }, [currentPosts])
            )}
          </div>
        </div>
      </section>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={filteredData > 0 ? currentPosts.length : data.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        selectedPage={selectedPage}
      />
    </main>
  );
}

export default Blog;
