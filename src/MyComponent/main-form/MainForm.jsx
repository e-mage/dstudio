import React, {useContext, useState} from "react";
import './MainForm.css';
import Dance from './Dance.png';
import Teatr from './Teatr.png';
import Ind from './Id.png';
import Course from "../Course/Course";
import UserForm from "../UserForm/UserForm";
import {UserContext} from "../../context";
import ShowCourse from "../ShowCourse/ShowCourse";


function MainForm() {

    const {isUser} = useContext(UserContext);
    const [selectedCourse, setSelectedCourse] = useState(undefined);
    const [chosen, setChosen] = useState(undefined);

const courses=[
    {
        id: 1,
        title:'Уличный танец',
        description:`Занятия в данном модуле предусматривают развитие по
        5 направлениям уличного современного танца: break dance, popping (robot&animation), locking, modern, hip-hop`,
        price:'Стоимость: 2500 руб/месяц',
        image: Dance,
        schedule: 'Вторник, Четверг, Суббота - 18:30'
    },
    {
        id: 2,
        title:'Театральная лабаратория',
        description:`В этом модуле вас ждёт полный театрально-танцевальный прокач!
                        Актёрские тренинги, многообразие танцевальных направлений и постановка полноценного танцевального спектакля!`,
        price:'Стоимость: 2500 руб/месяц',
        image: Teatr,
        schedule: 'Понедельник, Среда, Пятница - 19:30'
    },
    {
        id: 3,
        title:'Индивидуальные занятия',
        description:`В любое время вы можете записаться на индивидуальное занятие с любым из наших педагогов.
                        Один клик мышки - и весь наш опыт к вашим услугам!`,
        price:'Стоимость: 800 руб/занятие',
        image: Ind,
        schedule: 'По договоренности'
    },
]
    function checkIn() {
        if (selectedCourse) {
            console.log('checkin');
            const name = localStorage.getItem('name');
            const tel = localStorage.getItem('tel');
            let allUsersStr = localStorage.getItem('users');
            let allUsers = JSON.parse(allUsersStr) || [];
            const foundUserIndex = allUsers.findIndex(item => item.name === name && item.tel === tel);
            // if user exists rewrite course title
            if (foundUserIndex === -1) {
                allUsers.unshift({ name, tel, course : selectedCourse.title});
            } else {
                allUsers[foundUserIndex].course = selectedCourse.title;
            }
            // Limit number of users in localStorage
            if (allUsers.length > 20) allUsers = allUsers.slice(0,20);
            allUsersStr = JSON.stringify(allUsers);
            localStorage.setItem('users', allUsersStr);
            // Set Chosen course
            setChosen(selectedCourse);
        }
    }

    return (
        <div className="main__form-background">
            <div className="main__form" id="Form">
                <div className="main__form-card">
                    {courses.map(item => (
                        <Course key={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                setSelected={() => setSelectedCourse(item)}
                                chosen={ chosen?.id === item?.id }
                        />
                    ))}
                </div>
                <div className="main__form-input">
                    <h2>Ваш танцевальный курс</h2>
                    { isUser
                        ?
                        <ShowCourse course={selectedCourse} checkIn={checkIn}/>
                        :
                        <UserForm/>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainForm;