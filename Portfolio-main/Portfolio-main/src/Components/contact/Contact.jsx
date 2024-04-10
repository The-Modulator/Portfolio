import "./contact.scss";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import {useRef} from "react";

const variants={
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
    }
}

const Contact = () =>{
    const formRef = useRef();  
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wz4dgtn', 'template_lj6kpmb', formRef.current, {
            publicKey: 'QOX7MMYMr7C7KAc-R',
          })
          .then(
            () => {
                setSuccess(true);
            },
            (error) => {
                setError(true);
            },
          );
      };



    return(
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer">
                <motion.h1  variants={variants}>Let's work together</motion.h1>
                <motion.div className="mail"  variants={variants}>
                    <h2>Mail</h2>
                    <span>elias_ghabriel@hotmail.com</span>
                </motion.div>
                <motion.div className="address"  variants={variants}>
                    <h2>Address</h2>
                    <span>Mtayleb, Mount Lebanon</span>
                </motion.div>
                <motion.div className="phone"  variants={variants}s>
                    <h2>Phone</h2>
                    <span>+961 76392539</span>
                </motion.div>
                </motion.div>
                <div className="formContainer">

                                        
                    <form ref={formRef} onSubmit={sendEmail}>
                    <input text="text" required placeholder="Name" name="user_name"/>
                    <input text="email" required placeholder="Email" name="user_email"/>
                    <textarea rows={8} placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {error && "Error"}
                        {success && "Message received! Thanks for reaching out!"}
                        </form>


                </div>
            
        </motion.div>
    )
}

export default Contact;