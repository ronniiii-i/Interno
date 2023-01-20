import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section id="cta" className="flex align-center justify-center">
        <div className="inner flex column align-center justify-center">
            <h2>Wanna join the interno?</h2>
            <p>It is a long established fact that will be distracted.</p>
            <a href="" className="flex align-center justify-between">Contact Us <FaArrowRight/></a>
        </div>
    </section>
  )
}

export default CTA