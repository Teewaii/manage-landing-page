import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
import Testimonial from './components/testimonial/Testimonial';
import Btn from './components/buton/Btn';
import Subfooter from './components/subfooter/Subfooter';
import Footer from './components/footer/Footer';
import wtm from '../.././manage-landing-page/src/img/bg-tablet-pattern.svg'

function App() {


  const [toggle, setToggle] = useState(true);
  function toggleMenu() {
    setToggle(prev => !prev)
  }

  return (
    <div className="App overflow-hidden relative lg:before:absolute lg:before:bg-hero-pattern 
    before:top-[-5rem] lg:before:bottom-0 before:bg-contain  lg:before:right-0 lg:before:left-[85rem] 
    lg:before:bg-no-repeat  lg:before:w-[800px] lg:before:z-[-20]
    ">
     {/* <div className="bucket relative before:absolute before:bg-[red] w-4 bg-DarkBlue"> </div> */}
      <Nav  className="relative z-40"
        toggle={toggle}
        toggleMenu={toggleMenu}
      />
      <Hero />
      <About />
      <Testimonial />
      <Btn />
      <Subfooter />
      <Footer />
    {!toggle?<div className="overlay bg-gradient-to-t from-[black] to-VeryLightGray opacity-50 absolute top-[100px] 
    left-0 right-0 bottom-0] h-[100vh] z-[-1]">        
      </div>:null}
    </div>
   
  );
}

export default App;
