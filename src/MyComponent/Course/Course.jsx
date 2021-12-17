import React, {useContext} from 'react';

import Dance from './Dance.png';
import {UserContext} from "../../context";


const Course = (props) => {

    console.log(props)
    const {isUser} = useContext(UserContext);

    const chosenStyle = props.chosen ? { backgroundColor: 'green' } : {};

    return (
        <div style={chosenStyle}>
            <img src={Dance} alt="icon dance"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button disabled={!isUser} onClick={props.setSelected}>Показать информацию</button>
        </div>
    );
};

export default Course;