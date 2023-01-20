import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

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
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App