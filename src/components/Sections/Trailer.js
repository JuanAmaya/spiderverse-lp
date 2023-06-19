import { motion } from "framer-motion";

const Trailer = () => {
    const gwenVariants = {
        offscreen: {
            opacity: 0,
            rotate: 30,
            y: -100
        },
        onscreen: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const peterVariants = {
        offscreen: {
            opacity: 0,
            x: -100
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const trailerVariants = {
        offscreen: {
            opacity: 0,
            rotate: -50,
            y: -80
        },
        onscreen: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6
            }
        }
    };

    const trailerTitleVariants = {
        offscreen: {
            opacity: 0,
            x: -10
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6
            }
        }
    };

    return <>
        <motion.div
            className="flex justify-end lg:absolute lg:right-0 lg:z-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.img
                src="./images/gwen2.png"
                alt="Gwen Stacy"
                className="w-52 lg:w-60"
                variants={gwenVariants}
            />
        </motion.div>

        <motion.div
            className="relative"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.h2
                className="text-4xl text-center text-glitch-green font-semibold py-4 font2"
                variants={trailerTitleVariants}
            >
                TRAILER
            </motion.h2>
            <motion.iframe
                src="https://www.youtube.com/embed/shW9i6k8cB0?controls=1"
                title="Spiderman: Across the Spiderverse trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-96 h-52 lg:w-trailerLG lg:h-trailerLG max-w-2xl mx-auto"
                variants={trailerVariants}
            ></motion.iframe>
            <img
                src="./images/portalCover.jpg"
                alt="Spiderverse portal"
                className="blur-sm absolute top-0 -z-10 object-cover h-96 opacity-75 w-screen"
            />
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: .8 }}
            >
                <motion.img
                    src="./images/peter.png"
                    alt="Peter B. Parker"
                    className="w-60 lg:w-80"
                    variants={peterVariants}
                />
            </motion.div>
        </motion.div>
    </>;
};

export default Trailer;