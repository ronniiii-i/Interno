import React from 'react'

function Testimonial() {
  return (
    <section id="testimonial">
        <div className="inner">
            <h2>What People Think About Us</h2>
            <div className="row flex justify-between full-width">
                <div className="column by-3">
                    <div className="head">
                        <div className="avatar">
                            <img src="" alt="Avatar" />
                        </div>
                        <div className="author-details">
                            <h4>Nattasha Mith</h4>
                            <p>Sydney, USA</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perferendis ex est dicta soluta reprehenderit amet.   
                    </p>
                </div>
                <div className="column by-3">
                    <div className="head">
                        <div className="avatar">
                            <img src="" alt="Avatar" />
                        </div>
                        <div className="author-details">
                            <h4>Raymond Galario</h4>
                            <p>Sydney, Australia</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perferendis ex est dicta soluta reprehenderit amet. Ea et esse nam?   
                    </p>
                </div>
                <div className="column by-3">
                    <div className="head">
                        <div className="avatar">
                            <img src="" alt="Avatar" />
                        </div>
                        <div className="author-details">
                            <h4>Benny Roll</h4>
                            <p>Sydney, New York</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora perferendis ex est dicta soluta reprehenderit.   
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial