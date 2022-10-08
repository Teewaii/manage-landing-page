import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
import Testimonial from './components/testimonial/Testimonial';
import Btn from './components/buton/Btn';
import Subfooter from './components/subfooter/Subfooter';

function App() {


  const [toggle, setToggle] = useState(true);
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
      <Btn />
      <Subfooter />
    </div>
  );
}

export default App;
