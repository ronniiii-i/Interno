import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { FaChevronRight } from "react-icons/fa";

function Blog_Details() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let post;

  useEffect(() => {
    fetch(`https://6442fd8d90738aa7c069d524.mockapi.io/api/v1/blogposts?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setData(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header></header>
      <div className="inner flex justify-center">
        <main>
          <section id="post">
            <article>
                <h2>{data.post_title}</h2>
                <div className="image">
                    <img src={data.img_url} alt={data.post_title} />
                </div>
                <div className="flex align-center justify-between">
                    <a href={`/blog/date/${data.date}`}>{data.date}</a>
                    {data.tags.map}
                </div>
            </article>
          </section>
          <form action=""></form>
        </main>
        <aside></aside>
      </div>
    </>
  );
}

export default Blog_Details;
