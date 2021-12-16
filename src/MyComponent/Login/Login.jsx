import React, {useContext, useState} from 'react';
import {UserContext} from "../../context";

const Login = () => {
    const {setIsAuth} = useContext(UserContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        if (login === 'admin' && password === 'admin') {
            setIsAuth(true);
        } else {
            return alert('error login or password!');
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="login" value={login} onChange={event => setLogin(event.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;