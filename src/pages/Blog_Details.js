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
import { BsCheck, BsSearch } from "react-icons/bs";

function Blog_Details() {
  const { slug } = useParams();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [postTitles, setPostTitles] = useState([]);
  const [categories, setCategories] = useState([]);
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
        setTags(data[0].tags);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

    const url = `https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts`;
    let cats = [];
    fetch(url)
      .then((response) => response.json())
      .then((postTitles) => {
        // Sort postTitles by date in descending order
        postTitles.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPostTitles(postTitles);
        for (let i = 0; i < postTitles.length; i++) {
          cats.push(postTitles[i].category);
        }
        const mySet = new Set(cats);
        setCategories([...mySet]);
        console.log(categories);
        setPostIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleClass = () => {
    setCheck(!check);
  };

  //   const elements = data.tags.map((element, index) =>
  //     <span key={index}>
  //       {element}{index < data.tags.length - 1 ? '/' : ''}
  //     </span>
  //   );

  // const rawMarkup = converter.makeHtml(data.post_text);

  return (
    <>
      <section className="blog_details"></section>
      <div className="blog_details inner flex justify-center align-start wrap">
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
                  <a href={`/blog?date=${data.date}`}>{data.date}</a>
                  <span>
                    {/* {tags.map((item, index) => (
                      <>
                        <a key={item} href={`/blog?tag=${item}`}>
                          {item}
                        </a>
                        {index !== item.length - 1 && " / "}
                      </>
                    ))} */}
                  </span>
                </div>
                <div
                  className="post"
                  dangerouslySetInnerHTML={{ __html: data.post_text }}
                />
                <div className="post_end flex justify-center align-center wrap">
                  <div className="cat flex align-center">
                    <h4>Category</h4>
                    <a
                      href={`/blog?category=${data.category}`}
                      className="button"
                    >
                      {data.category}
                    </a>
                  </div>
                  <div className="socials flex justify-evenly align-center">
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
            <div className="grid grid-equal-cols-2">
              <input type="text" placeholder="Name" id="user_name" required />
              <input
                type="email"
                placeholder="Email"
                id="user_email"
                required
              />
              <input
                type="url"
                placeholder="Website (optional)"
                id="user_website"
              />
              <input type="tel" placeholder="Phone" id="user_phone" required />
            </div>
            <textarea
              id="message"
              placeholder="Hello I am interested in..."
              required
            ></textarea>
            <div className="flex align-center ">
              <div className="check">
                <input type="checkbox" id="save" onChange={toggleClass} />
                <div
                  className={check ? "box checked" : "box"}
                  onClick={toggleClass}
                >
                  <BsCheck />
                </div>
              </div>
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
            <input type="search" name="" id="" placeholder="Search" />
            <BsSearch />
          </div>
          <div className="latest">
            <h4>Latest Posts</h4>
            {postisLoading ? (
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
              postTitles.slice(0, 3).map((item) => (
                <div key={item.uuid} className="item">
                  <a href={`/blog/${item.slug}`}>
                    <h5>{item.post_title}</h5>
                  </a>
                  <p>{item.date}</p>
                </div>
              ))
            )}
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              {categories.map((item) => (
                <li key={item}>
                  <a href={`/blog?category=${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Blog_Details;
