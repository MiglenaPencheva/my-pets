import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOne, getLikes } from '../../services/petService';

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        getOne(match.params.petId)
            .then(res => setPet(res));
    }, []);

    const onPetButtonClickHandler = () => {
        let newLikes = pet.likes + 1;
        getLikes(match.params.petId, newLikes)
            .then((updatedPet) => {
                setPet(state => ({ ...state, likes: Number(updatedPet.likes) }))
            });
    };

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} alt="your pet here"/></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
            </div>
        </section>
    );
};

export default PetDetails;