const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
    let queryString = (category && category !== 'all')
        ? `?category=${category}`
        : '';

    return fetch(url + queryString)
        .then(res => res.json())
        .then(pets => pets.map(x => ({...x, Likes: Number(x.likes)})))
        .catch(error => console.log(error));
};