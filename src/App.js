import './App.css';
import React, {useState} from "react";
import Header from "./MyComponent/header/Header";
import Main from "./MyComponent/main/Main";
import Footer from "./MyComponent/footer/Footer";
import {UserContext} from "./context";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    const [isUser, setIsUser] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
  return (
      <BrowserRouter>
          <UserContext.Provider value={{isUser, setIsUser, isAuth, setIsAuth}}>
              <div className="body">
                  <Header/>
                  <Routes>
                      <Route path="/">
                          <Main/>
                      </Route>
                      <Route path="/login">
                          <h1>Login</h1>
                      </Route>
                      <Route path="/error">
                          <h1>Error</h1>
                      </Route>
                  </Routes>

                  <Footer/>
              </div>
          </UserContext.Provider>
      </BrowserRouter>
  );
}
export default App;
