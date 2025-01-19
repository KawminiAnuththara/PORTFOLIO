import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/contact/Contact';
import Blog from './components/Blog/Blog';

const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section><Skills/></section>
      <section><Blog/></section>
      <section><Project/></section>
      <section><Contact/></section>
    </div>
  )
}

export default App