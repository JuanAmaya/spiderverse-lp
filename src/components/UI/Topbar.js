import SonyLogo from "../SVG/SonyLogo";
import { motion } from "framer-motion";

const regularBGColor = [
    "linear-gradient(90deg, #FF00FC, #F70201)",
    "linear-gradient(90deg, #02FCB6,  #409AE2)",
    "linear-gradient(90deg, #F70201, #FF00FC)",
    "linear-gradient(90deg, #409AE2,  #02FCB6)",
    "linear-gradient(90deg, #FF00FC, #F70201)",
];

const Topbar = () => {
    const topbarVariants = {
        visible: {
            background: regularBGColor,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                background: {
                    duration: 7,
                    repeat: Infinity,
                },
            },
        }
    };

    return <motion.div
        className=" p-2 flex justify-center fixed z-50 w-screen"
        variants={topbarVariants}
        animate="visible"
    >
        <SonyLogo />
    </motion.div>;
};

export default Topbar;