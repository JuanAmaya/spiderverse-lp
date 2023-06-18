import CompaniesVideo from "../UI/CompaniesVideo";
import Credits from "../UI/Credits";
import { motion } from "framer-motion";

const DIRECTORS = [
    {
        name: "Joaquim Dos Santos"
    },
    {
        name: "Kemp Powers"
    },
    {
        name: "Justin K. Thompson"
    }
];

const WRITTERS = [
    {
        name: "Phil Lord"
    },
    {
        name: "& Christopher Miller"
    },
    {
        name: "& David Callaham"
    }
];

const PRODUCERS = [
    {
        name: "Avi Avarad"
    },
    {
        name: "Amy Pascal"
    },
    {
        name: "Phil Lord"
    },
    {
        name: "Christopher Miller"
    },
    {
        name: "Christina Steinberg"
    }
];

const EXECUTIVE = [
    {
        name: "Bob Persichetti"
    },
    {
        name: "Peter Ramsey"
    },
    {
        name: "Rodney Rothman"
    },
    {
        name: "Aditya Sood"
    },
    {
        name: "Brian Michael Bendis"
    }
];

const Production = () => {
    const gwenVariants = {
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

    const miguelVariants = {
        offscreen: {
            opacity: 0,
            y: 50
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

    const manchaVariants = {
        offscreen: {
            opacity: 0,
            x: 100
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

    return <>
        <CompaniesVideo videoSrc="./videos/sonyPictures.mp4" />

        <div className="relative max-w-screen-lg mx-auto">
            <Credits title="Directed" persons={DIRECTORS} titleColor={"#D74A85"} font={"font3"} />

            <motion.div
                className="flex justify-center lg:absolute lg:right-0 lg:-top-24"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.img
                    src="./images/gwen.png"
                    alt="Gwen Stacy"
                    className="w-40 lg:w-48"
                    variants={gwenVariants}
                />
            </motion.div>

            <Credits title="Written" persons={WRITTERS} titleColor={"#DBC130"} font={"font4"} />
            <motion.div
                className="flex justify-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.img
                    src="./images/miguel.png"
                    alt="Miguel Ohara"
                    className="w-60 lg:w-72"
                    variants={miguelVariants}
                />
            </motion.div>
        </div>


        <CompaniesVideo videoSrc="./videos/marvel.mp4" />

        <div className="relative max-w-screen-lg mx-auto">
            <Credits title="Directed" persons={PRODUCERS} titleColor={"#39AF72"} font={"font5"} />
            <motion.div
                className="flex justify-center lg:absolute lg:right-0 lg:top-12"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.img
                    src="./images/mancha.png"
                    alt="Mancha"
                    className="w-64 lg:w-80"
                    variants={manchaVariants}
                />
            </motion.div>
            <Credits title="Written" persons={EXECUTIVE} titleColor={"#0AFFEB"} font={"font6"} />
        </div>

        <CompaniesVideo videoSrc="./videos/columbia.mp4" />
    </>;
};

export default Production;