import { motion } from "framer-motion";

const Footer = () => {
    const footerVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return <motion.div
        className="text-zinc-600 px-8 text-sm mb-4 flex justify-center flex-col max-w-screen-xl mx-auto gap-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={footerVariants}
    >
        <span>MARVEL and all related character names: © & ™ 2023 MARVEL</span>
        <span>
            "Academy Award®" and/or "Oscar®" is the registered trademark and service mark of the Academy of
            Motion Picture Arts and Sciences.
        </span>
        <span>
            This film is rated PG by the Motion Picture Association for the following reasons: frenetic
            sequences of animated action violence, some language and thematic elements
        </span>
    </motion.div>;
};

export default Footer;