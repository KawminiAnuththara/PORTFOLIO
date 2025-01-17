import React from 'react'
import './Contact.css'
import {animate, motion} from 'framer-motion'

const variants ={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact = () => {
  return (
    <motion.div className='contactC'>
        <div className="textContainerC">
            <h1>Contact Me</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>anuththarakawmini@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>NO 82,Puwalgahawela Road,Weragala,Padukka</span>
            </div>
            <div className="item">
                <h2>Mobile</h2>
                <span>077-4845647</span>
            </div>
            <div className="item">
                <h2>Linkedin</h2>
                <span>www.linkedin.com/in/kawmini-anuththara</span>
            </div>
            <div className="item">
                <h2>GitHub</h2>
                <span>https://github.com/KawminiAnuththara</span>
            </div>
        </div>
        <div className="formContainerC">
            <form>
                <input type='text' required placeholder='Name'/>
                <input type='email' required placeholder='Email'/>
                <textarea rows={8} placeholder='Message'/>
                <button>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact