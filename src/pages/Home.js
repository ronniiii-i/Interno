import React from 'react'
import Hero from '../components/Home/Hero'
import Work from '../components/Home/Work'
import About from '../components/Home/About'
import Testimonial from '../components/Home/Testimonial'
import Clients from '../components/Home/Clients'
import Projects from '../components/Home/Projects'
import Counter from '../components/Home/Counter'
import Blog from '../components/Home/Blog'
import CTA from '../components/CTA'

function Home() {
    return (
        <main id='home'>
            <Hero />
            <Work />
            <About />
            <Testimonial />
            <Clients />
            <Projects />
            <Counter />
            <Blog />
            <CTA />
        </main>
    )
}

export default Home