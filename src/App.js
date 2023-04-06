import Nav from './components/Nav'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App