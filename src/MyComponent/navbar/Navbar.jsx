import React, {useContext} from "react";
import './Navbar.css';
import Icon from './icon VK.png'
import Insta from './Insta.png'
import {UserContext} from "../../context";
import {Link, useNavigate} from "react-router-dom";


function Navbar(){
    const {isAuth, setIsAuth} = useContext(UserContext);
    let navigate = useNavigate();

    return (
        <nav className="header__top_navigator">
            <ul className="nav__content">
                <li><Link to="/#article">О&nbsp;студии</Link></li>
                <li><Link to="/#Form">Записаться на курс</Link></li>
                <li><Link to="/#Footer">Котакты</Link></li>
                <li>{ isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button>
                    : <button onClick={() => navigate(`/private`)}>Login</button>
                }</li>
            </ul>
            <ul className="nav__network" >
                <li><a href="https://vk.com/teatr_izhevsk" target="_blank" rel="nofollow noopener noreferer"> <img src={Icon} alt="icon VK"/></a></li>
                <li><a href="https://www.instagram.com/anddance_ru/" target="_blank" rel="nofollow noopener noreferer"><img src={Insta} alt="icon Instagram"/> </a></li>

            </ul>
        </nav>
    )
}

export default Navbar;