import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";



const Parallax = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const yText=useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
    const yplanets=useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const ystars=useTransform(scrollYProgress, [0,1], ["0%", "5%"]);


    return(
        // <div className="parallax" ref={ref} style={{ background: 'linear-gradient(180deg, #111132, #505064)' }}>
        <div className="parallax" ref={ref} style={{ background: 'linear-gradient(180deg, #111132, #111132)' }}>
            <motion.h1 style={{y:yText}}>Projects</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{x:yplanets}} className="planets"></motion.div>
            <motion.div style={{x:ystars}} className="stars"></motion.div>

        </div>
    )
}


export default Parallax