import { motion } from "framer-motion";

const Intro = () => {
    const titleVariants = {
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

    return <>
        <div className="h-videoBG -z-10">
            <video autoPlay muted playsInline loop
                className="min-w-full h-full relative bg-cover object-cover left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4"
            >
                <source src="./videos/bgVideo.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="absolute z-10 top-titleTop left-1/2 -translate-x-2/4">
            <motion.img
                src="./images/title.png"
                alt="Spider-Man: Across the Spider-Verse"
                className="max-w-lg"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            />
        </div>
    </>;
};

export default Intro;