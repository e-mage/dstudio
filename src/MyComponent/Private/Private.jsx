import React, {useContext} from 'react';
import {UserContext} from "../../context";
import Login from "../Login/Login";

const Private = () => {
    const {isAuth} = useContext(UserContext);

    if (!isAuth) {
        return (
            <Login />
        );
    }

    return (
        <div>
            <h2>Top Secret</h2>
        </div>
    );
};

export default Private;