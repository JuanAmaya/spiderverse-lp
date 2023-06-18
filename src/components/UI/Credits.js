const Credits = ({ title, persons, titleColor, font }) => {
    return <div className="flex gap-8 text-lg p-4 justify-center">
        <h3
            className={`${font}`}
            style={{ color: `${titleColor}` }}
        >
            {title} by:
        </h3>
        <ul>
            {persons.map((person, i) => <li key={i} className="font-bold">{person.name}</li>)}
        </ul>
    </div>;
};

export default Credits;