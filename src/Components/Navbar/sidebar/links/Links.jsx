import {motion} from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChlidren: 0.1,
        },
    },
        closed: {
            transition: {
                straggerChildren: 0.05,
                straggerDirection: -1,
            },
        },
    };


    const itemVariants = {
        open: {
            y: 0,
            opacity:1,
        },
            closed: {
                y: 50,
                opacity: 0,
            },
        };

        

const Links = () => {
    const items = [
        "Homepage",
        "Projects",
        "Contact",

    ]
    return (
        <motion.div className="Links" variants={variants}> 
        {items.map((item) => (
            < motion.a href={`#${item}`} key={items} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}> {item} </motion.a>
        
    ))}
    </motion.div>
    );
};

export default Links;