import DownArrow from "../SVG/DownArrow";

const Intro = () => {

    return <>
        <div className="h-videoBG -z-10">
            <video autoPlay muted playsInline loop
                className="min-w-full h-full relative bg-cover object-cover left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4"
            >
                <source src="./videos/bgVideo.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="absolute z-10 top-titleTop left-1/2 -translate-x-2/4">
            <img
                src="./images/title.png"
                alt="Spider-Man: Across the Spider-Verse"
                className="max-w-lg"
            />

            <DownArrow />
        </div>
    </>;
};

export default Intro;