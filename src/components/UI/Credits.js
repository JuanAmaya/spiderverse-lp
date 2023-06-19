import { motion } from "framer-motion";

const Credits = ({ title, persons, titleColor, font }) => {
    const descripVariants = {
        offscreen: {
            opacity: 0,
            y: 10
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return <motion.div
        className="flex gap-8 text-lg p-4 justify-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={descripVariants}
    >
        <h3
            className={`${font}`}
            style={{ color: `${titleColor}` }}
        >
            {title} by:
        </h3>
        <ul>
            {persons.map((person, i) => <li key={i} className="font-bold">{person.name}</li>)}
        </ul>
    </motion.div>;
};

export default Credits;