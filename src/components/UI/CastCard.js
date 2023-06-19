import { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";

const CastCard = ({ name, va, image, imageVA, mainCol, secCol }) => {
    const castCardVariants = {
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

    const [changeImage, setChangeImage] = useState(false);
    const glitch = useGlitch();

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setChangeImage(changeImage => !changeImage);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <motion.div
        className="w-40 relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={castCardVariants}
    >
        <img src={`images/cast/${changeImage ? image : imageVA}`} alt={name} className="object-cover w-full h-48" ref={glitch.ref} />
        <div
            className={`font7 flex flex-col text-center font-semibold`}
            style={{ backgroundColor: `${secCol}`, color: `${mainCol}` }}
        >
            <span>{name} /</span>
            <span>{va}</span>
        </div>
        <div
            className={`absolute w-full h-full -bottom-2 right-2 -z-10`}
            style={{ backgroundColor: `${mainCol}` }}
        ></div>
    </motion.div>;
};

export default CastCard;