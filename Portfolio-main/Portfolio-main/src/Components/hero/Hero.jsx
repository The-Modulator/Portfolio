import "./hero.scss";
import React from 'react';
import { motion } from 'framer-motion';


const textVariants ={
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
    
    scrollButton:{
        opacity: 0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};




const sliderVariants ={
    initial: {
        x: 0,
    },

    animate: {
        x: "-100%",
        transition:{
            repeat: Infinity,
            duration:10,
            repeatType: "mirror",

        },
    },
};





const Hero = () => {

    



    return (
    <div className="hero">
        <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ELIAS GHABRIEL</motion.h2>
          <motion.h1 variants={textVariants}>Blockchain Developer and Consultant</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Download CV</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll Down" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate"> 
            Innovator
        </motion.div>
        <div className="imageContainer">
            <img src="hero.png" alt="hero.png"/>
        </div>
        
    </div>
    );
};

export default Hero;