import Nav from './components/Nav'
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
    </>
  )
}

export default App