import Cast from "./Cast";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

const End = () => {
    const catVariants = {
        offscreen: {
            opacity: 0,
            x: 100,
            y: -50
        },
        onscreen: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const milesVariants = {
        offscreen: {
            opacity: 0,
            scale: 0
        },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return <>
        <div className="relative mb-12">
            <motion.div
                className="flex justify-center lg:absolute lg:-top-40 lg:left-1/2"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.img
                    src="./images/spidercat.png"
                    alt="Spidercat"
                    className="w-60"
                    variants={catVariants}
                />
            </motion.div>
            <Cast />
        </div>

        <Gallery />
        <motion.div
            className="flex justify-center my-4 max-w-screen-md mx-auto"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.img
                src="./images/miles.png"
                alt="Miles Morales"
                variants={milesVariants}
            />
        </motion.div>
    </>;
};

export default End;