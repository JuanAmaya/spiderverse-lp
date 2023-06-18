import { motion } from "framer-motion";

const CompaniesVideo = ({ videoSrc }) => {
    const companyVariants = {
        offscreen: {
            scaleY: 0,
            x: "-50%"
        },
        onscreen: {
            scaleY: 1,
            x: "-50%",
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <motion.video autoPlay muted playsInline loop
            className="min-w-full relative bg-cover object-cover left-1/2 max-h-64"
            variants={companyVariants}
        >
            <source src={videoSrc} type="video/mp4" />
        </motion.video>
    </motion.div>;
};

export default CompaniesVideo;