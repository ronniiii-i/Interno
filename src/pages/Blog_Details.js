import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function Blog_Details() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [postTitles, setPostTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postisLoading, setPostIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts?slug=${slug}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setData(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

    const url = `https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts?_start=${0}&_end=${3}`;
    fetch(url)
      .then((response) => response.json())
      .then((postTitles) => {
        // Sort postTitles by date in descending order
        postTitles.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPostTitles(postTitles);
        setPostIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  //   const elements = data.tags.map((element, index) =>
  //     <span key={index}>
  //       {element}{index < data.tags.length - 1 ? '/' : ''}
  //     </span>
  //   );

  // const rawMarkup = converter.makeHtml(data.post_text);

  return (
    <>
      <header></header>
      <div className="inner flex justify-center">
        <main>
          <section id="post">
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
              <article>
                <h2>{data.post_title}</h2>
                <div className="image">
                  <img src={data.img_url} alt={data.post_title} />
                </div>
                <div className="flex align-center justify-between">
                  <a href={`/blog/date/${data.date}`}>{data.date}</a>
                  {data.tags}
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.post_text }} />
                <div className="post_end flex justify-center align-center wrap">
                  <div className="cat flex justify-evenly align-center">
                    <h4>Category</h4>
                    <a
                      href={`/blogs/category=${data.category}`}
                      className="button"
                    >
                      {data.category}
                    </a>
                  </div>
                  <div className="socials">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                  </div>
                </div>
              </article>
            )}
          </section>
          <form action="">
            <h3>Leave a Reply</h3>
            <div className="grid">
              <input type="text" id="user_name" required />
              <input type="email" id="user_email" required />
              <input type="url" id="user_website" />
              <input type="tel" id="user_phone" required />
            </div>
            <textarea
              id="message"
              placeholder="Hello I am interested in..."
            ></textarea>
            <div className="flex align-center justify-center">
              <input type="checkbox" id="save" />
              <label htmlFor="save">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button>
              Send Now <FaArrowRight />
            </button>
          </form>
        </main>
        <aside>
          <div className="search flex align-center justify-center">
            <input type="search" name="" id="" />
            <BsSearch />
          </div>
          <div className="latest">
            <h4>Latest Posts</h4>
            {postisLoading ? <ThreeCircles
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
            /> : postTitles.slice(0, 3).map((item) => (
                <div className="item">
                    <h5>{item.post_title}</h5>
                    <p>{item.date}</p>
                </div>
            ))}
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <ul>
                <li><a href={`/blog/category=bedroom`}>Bedroom</a></li>
                <li><a href={`/blog/category=home-decor`}>Home Decor</a></li>
                <li><a href={`/blog/category=living-room`}>Living Room</a></li>
                <li><a href={`/blog/category=kitchen`}>Kitchen</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Blog_Details;
