

const Pet = ({
    id,
    name,
    description,
    imageUrl,
    category,
    likes
}) => {

    return (
        <li>
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p><img src={imageUrl} /></p>
            <p>{description}</p>
            <div>
                <i></i> <span> {likes}</span>
            </div>
        </li>
    );
};

export default Pet;