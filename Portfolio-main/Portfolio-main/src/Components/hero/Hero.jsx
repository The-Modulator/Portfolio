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


    const handleDownloadPDF = () => {
        // Assuming you have the URL of the PDF file
        const pdfUrl = 'Elias-resume.pdf';
    
        // Creating a temporary anchor element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Elias-resume.pdf'; // Set the file name here
        document.body.appendChild(link);
    
        // Triggering the click event on the anchor element
        link.click();
    
        // Removing the anchor element from the DOM
        document.body.removeChild(link);
      };


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

            <motion.button variants={textVariants} onClick={handleDownloadPDF}>Download CV</motion.button>
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