import './App.css';
import {Navigate, Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import Header from "./MyComponent/header/Header";
import Main from "./MyComponent/main/Main";
import Footer from "./MyComponent/footer/Footer";
import {UserContext} from "./context";
import Private from "./MyComponent/Private/Private";


function App() {
    const [isUser, setIsUser] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    return (
        <UserContext.Provider value={{isUser, setIsUser, isAuth, setIsAuth}}>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/private" element={<Private/>} />
                    <Route path="*" element={<Navigate to='/'/>} />
                </Routes>
            </main>
            <Footer/>
        </UserContext.Provider>
    );
}
export default App;
