import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
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
    </div>
  );
}

export default App;
