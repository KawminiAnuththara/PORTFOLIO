import React, { useEffect, useState } from 'react';
import './Hero.css';
import {motion} from 'framer-motion'
import myPic from '../../assets/myPic.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const textVariants = {
   initial:{
    x:-500,
    opacity:0,
   },
   animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
   },

};

const sliderVariants = {
  initial:{
   x:0,
  },
  animate:{
   x:"-220%",
   transition:{
    repeat:Infinity,
    repeatType:"mirror",
     duration:20,
     
   },
  },

};

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Software Engineer','Web Developer', 'Mobile Developer', 'MERN Developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]); // Re-run effect when `text` changes

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="hero">
      <div className="textContainer" >
        <motion.div className="wrapper" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 variants={textVariants}>Kawmini Kalubowila</motion.h1>
        <motion.h2 variants={textVariants}>
          {`I'am a `}
          <span className="wrap">{text}</span>
        </motion.h2>
        <div className='buttons'>
        <motion.button onClick={() => console.log('Resume')} variants={textVariants}>
          My Resume 
        </motion.button>
        <motion.button variants={textVariants}>Contact Me</motion.button>
        </div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Contact Me
      </motion.div>
      <div className="imageContainer">
      <img src={myPic} alt="Profile"  />
      </div>
     
    </div>
  );
};

export default Hero;
