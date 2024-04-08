import React from "react";
import {motion} from "framer-motion";

const Test = ( ) => {
    return (
        <div className="course">
            <motion.div 
            className="box" 
            animate={{opacity: 0.5, scale:0.5}} 
            whileTap={{opacity:1, scale:1}}
            drag
            ></motion.div>
        </div>
    )
}


export default Test; 
