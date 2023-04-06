import { FaArrowRight } from 'react-icons/fa'

function Plan({ tag, price, content }) {
  return (
    <div className='column'>
        <h4>{tag}</h4>
        <div className="widget">
            <span>$ <h1>{price}</h1></span>
            <p>/month</p>
        </div>
        <hr />
        <ul>
            {content}
        </ul>
        <button>
            Get Started <FaArrowRight />
        </button>
    </div>
  )
}

export default Plan