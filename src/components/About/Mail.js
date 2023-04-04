import { FaArrowRight } from "react-icons/fa";
  

function Mail() {
  return (
    <section id="mail">
        <div className="inner">
            <h2>Creative project? Let's have a productive talk.</h2>
            <form>
                <div className="row flex align-center justify-center full-width wrap">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                </div>
                <textarea id="" placeholder='Hello I am interested in...'></textarea>
                <button>Send Now <FaArrowRight /></button>
            </form>
        </div>
    </section>
  )
}

export default Mail