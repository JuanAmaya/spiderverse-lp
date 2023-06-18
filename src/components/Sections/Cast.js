import CastCard from "../UI/CastCard";

const CAST = [
    {
        id: 1,
        name: "Miles Morales",
        va: "Shameik Moore",
        image: "miles-prof.jpg",
        imageVA: "miles-VA.jpg",
        mainCol: "#E51925",
        secCol: "#141F40"
    },
    {
        id: 2,
        name: "Gwen Stacy",
        va: "Hailee Steinfeld",
        image: "gwen-prof.jpg",
        imageVA: "gwen-VA.jpg",
        mainCol: "#D7427D",
        secCol: "#FFFFFF"
    },
    {
        id: 3,
        name: "Miguel O'hara",
        va: "Oscar Isaac",
        image: "miguel-prof.jpg",
        imageVA: "miguel-VA.jpg",
        mainCol: "#C51021",
        secCol: "#001144"
    },
    {
        id: 4,
        name: "The Spot",
        va: "Jason Schwartzman",
        image: "mancha-prof.jpg",
        imageVA: "mancha-VA.jpg",
        mainCol: "#FFFFFF",
        secCol: "#000000"
    },
];

const Cast = () => {
    return <div className="mt-8 lg:pt-8">
        <h3 className="font8 text-glitch-blue text-6xl text-center mb-4">CAST</h3>
        <div className="grid grid-cols-cast justify-items-center gap-8 max-w-4xl mx-auto">
            {CAST.map((character) => <CastCard
                key={character.id}
                name={character.name}
                va={character.va}
                image={character.image}
                imageVA={character.imageVA}
                mainCol={character.mainCol}
                secCol={character.secCol}
            />)}
        </div>
    </div>;
};

export default Cast;