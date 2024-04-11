import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {

    const openNewTab = () => {
        // Specify the URL you want to open in the new tab
        const url = 'https://github.com/the-modulator';
    
        // Open a new tab with the specified URL
        window.open(url, '_blank');
      };

      

return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.3}}>The-Modulator</motion.span>
            <div className="social>">
                <a href="https://github.com/the-modulator" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt=""  /></a>
                <a href='https://github.com/the-modulator' target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="" /></a>
                <a href='https://github.com/the-modulator' target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="" /></a>


            </div>
        </div>
    </div>
)
}

export default Navbar;
