import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import ProjectDetails from './pages/Project_Details'
import Pricing from './pages/Pricing'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/bedroom" element={<Projects />} />
          <Route path="/projects/:category/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App