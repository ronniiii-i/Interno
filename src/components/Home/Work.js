import { BsArrowRight } from "react-icons/bs";

function Work() {
    return (
        <section id="work" className="flex justify-center align-center">
            <div className="inner flex wrap justify-center">
                <div className="column by-3">
                    <h3>Project Plan</h3>
                    <p>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="/" className="flex align-center justify-center">Read More <BsArrowRight /></a>
                </div>
                <div className="column by-3">
                    <h3>Interior Work</h3>
                    <p>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="/" className="flex align-center justify-center">Read More <BsArrowRight /></a>
                </div>
                <div className="column by-3">
                    <h3>Realization</h3>
                    <p>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="/" className="flex align-center justify-center">Read More <BsArrowRight /></a>
                </div>
            </div>
        </section>
    );
}

export default Work;
