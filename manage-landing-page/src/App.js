import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
import Testimonial from './components/testimonial/Testimonial';
function App() {


  const [toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle(prev => !prev)
  }

  return (
    <div className="App">
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
      />
      <Hero />
      <About />
      <Testimonial />
    </div>
  );
}

export default App;
