import React, {useContext} from 'react';
import {UserContext} from "../../context";
import Login from "../Login/Login";
import '../main/Main.css';

const Private = () => {
    const {isAuth, setIsAuth} = useContext(UserContext);

    if (!isAuth) {
        return (
            <Login />
        );
    }

    let allUsersStr = localStorage.getItem('users');
    let allUsers = JSON.parse(allUsersStr) || [];

    return (
        <div className="main">
            <button style={{ marginTop: '20px' }} onClick={() => setIsAuth(false)}>Logout</button>
            <h2>Users List</h2>
            <div>
                {
                    allUsers.map( item => (<p key={item.name+item.tel}> Name: {item.name}, Tel: {item.tel}, Course: {item.course} </p>))
                }
            </div>
        </div>
    );
};

export default Private;