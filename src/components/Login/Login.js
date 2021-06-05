import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/authService';

const Login = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const history = useHistory();

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        username = e.target.username.value;
        password = e.target.password.value;

        console.log(username, password);

        login(username, password)
            .then(history.push('/'))
            .catch(e => console.log(e));
    };

    return (
        <section className="login">
            <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;