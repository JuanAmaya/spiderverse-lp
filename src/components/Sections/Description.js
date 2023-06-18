import { motion } from "framer-motion";

const Description = () => {
    const milesVariants = {
        offscreen: {
            opacity: 0,
            y: -10
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

    return <div className="max-w-screen-lg mx-auto lg:flex">
        <motion.div
            className="flex justify-center lg:justify-start"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.img
                src="./images/miles2.png"
                alt="Miles Morales"
                className="w-52"
                variants={milesVariants}
            />
        </motion.div>
        <div>
            <h2 className="text-miles-red text-center text-4xl font1 font-semibold lg:pt-8">
                SPIDER-VERSE
            </h2>
            <p className="p-8 text-sm font-bold leading-5 max-w-3xl mx-auto">
                Miles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, <em>Spider-Man™: Across the Spider-Verse</em>.
                After reuniting with Gwen Stacy, Brooklyn&#x2019;s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse,
                where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse&#x2019;s very existence.
                But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set
                out on his own to save those he loves most. Anyone can wear the mask &minus; it&#x2019;s how you wear it that makes you a hero.
            </p>
        </div>
    </div>;
};

export default Description;