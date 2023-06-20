const Title = ({ title, fontType }) => {
    return <div
        className={`mx-auto text-4xl ${fontType} font-semibold lg:mt-8 bg-comic-yellow w-fit relative p-2 border-4 border-comic-brown`}
    >
        <h2 className="text-comic-brown">{title}</h2>
        <div className="absolute bg-comic-bg w-full -bottom-2 -left-2 h-full -z-10"></div>
    </div>;
};

export default Title;