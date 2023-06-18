import { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";

const Gallery = () => {
    const galleryVariants = {
        offscreen: {
            scaleY: 0,
        },
        onscreen: {
            scaleY: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const [widthSize, setWidthSize] = useState(getCurrentWidth());
    // const glitch = useGlitch();
    let numImg = 3;

    function getCurrentWidth() {
        return window.innerWidth;
    };

    useEffect(() => {
        const updateWidth = () => {
            setWidthSize(getCurrentWidth());
        };
        window.addEventListener("resize", updateWidth);

        return (() => {
            window.removeEventListener("resize", updateWidth);
        });
    }, [widthSize]);

    if (widthSize > 1656) {
        numImg = 12;
    } else if (widthSize > 1242) {
        numImg = 9;
    } else if (widthSize > 828) {
        numImg = 6;
    } else {
        numImg = 3;
    }

    return <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
    >
        <motion.div
            className="grid grid-rows-3 grid-flow-col"
            variants={galleryVariants}
        >
            {[...Array(numImg)].map((image, i) => <motion.img key={i} src={`./images/gallery/${i + 1}.jpg`} />)}
        </motion.div>
    </motion.div>;
};

export default Gallery;