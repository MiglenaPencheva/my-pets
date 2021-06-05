const url = 'http://localhost:5000/users';

export const register = (username, password) => {
    let user = {
        username,
        password
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
};

export const login = (username, password) => {
    let user = {
        username,
        password
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
};

export const logout = (username, password) => {
    
};