import React from 'react';
import styles from './app.module.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section>Parallax</section>
      <section>Parallax</section>
    </div>
  )
}

export default App