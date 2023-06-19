import { motion } from "framer-motion";

const DownArrow = () => {
    const arrowVariants = {
        hidden: {
            y: 10
        },
        visible: {
            y: -10,
            transition: {
                type: "spring",
                bounce: .6,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 mx-auto mt-4 opacity-75"
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
    </motion.svg>;
};

export default DownArrow;