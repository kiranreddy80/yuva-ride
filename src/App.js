import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Legal from './components/Legal';
import Footer from './components/Footer';
// import WhyChooseYuva from './components/WhyChooseYuva'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      
      {/* <HowItWorks /> */}
      <Team />
      <About />
      <Contact />
      <Blog />
      <Legal />
      <Footer />
    </div>
  );
}

export default App;