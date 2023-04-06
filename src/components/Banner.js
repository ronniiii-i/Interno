function Banner({ title, url, name, classn }) {
  return (
    <>
      <section id="banner" className={classn}>
        <div className="inner">
          <h2>{title}</h2>
          <p>
            <a href="/">Home</a> / <a href={url}>{name}</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Banner;
