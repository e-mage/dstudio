import React from 'react';
import './ShowCourse.css';
import Dance from "../Course/Dance.png";

const ShowCourse = (props) => {

    if (!props?.course) {
        return (
            <div className="main__show-course">
                <h2>Вы вошли</h2>
                <p>Выберите курс</p>
            </div>
        );
    }
    return (
        <div className="main__show-course">
            <h2>{props.course.title}</h2>
            <p>{props.course.description}</p>
            <p>{props.course.price}</p>
            <p>Расписание: {props.course.schedule}</p>
            <button onClick={props.checkIn}>Записаться на курс</button>
        </div>
    );
};

export default ShowCourse;