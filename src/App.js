import './App.css';
// import Form from './components/Header/form/Form.js';
import Login from "./components/Header/login.js";
import Header from './components/Header/Header.js';
import about from './components/About.js';
import pizza from "./components/images/pizza.jpg";
import Signup from './components/Header/Sign/SignUp';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

    const [isloggedin, setLoggedin] = useState("false");



    const loginHandler = (log) => {
        setLoggedin('log')
    }


    return (
        <div className="App">
            <Routes>
                <Route index element={<Header logOut={loginHandler}></Header>}/>
                <Route path='/login' element={<Login login={loginHandler}></Login>} />
                <Route path='/signup' element={<Signup image={pizza} />}></Route>

            </Routes>

    </div>

       
    );
}

export default App;

