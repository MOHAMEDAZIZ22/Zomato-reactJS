
import { useNavigate } from "react-router-dom";
import './Header.css'
import Form from './form/Form.js';
import bir from "../images/biryani1.png";
import Foodlist from "../Main/Foodlist.js";
import { useEffect, useState } from 'react';
function Header(props) {
    let logoutTo = useNavigate();
    const logoutHandler = (event) => {
        event.preventDefault();
        localStorage.setItem("login", "false");
        props.logOut('false');
        logoutTo('/login')
    };

    const loginHandler = () => {
        logoutTo('/login')
    }
    useEffect(() => {
        localStorage.getItem("login");
    })
    const [dishitems, setMenuitems] = useState([]);
    const [isloggedin, setLoggedin] = useState("false");


    useEffect(() => {
        setLoggedin(localStorage.getItem("login"));
    }, [isloggedin])

    useEffect(() => {
        console.log("summa");
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io').then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setMenuitems(data)
            })

    }, []);
    const FormHandler = (Aziz) => {
        setMenuitems((premenuitems) => {
            return [...[Aziz], ...premenuitems]
        });

    }
    return (<>
        <header className="App-header">
            <h1>Zomato</h1>
            <input type='text' placeholder="enter your dish or restaurant..."></input>
            {
                localStorage.getItem("login") === "true" ? <button onClick={logoutHandler}>Log out</button> : <button onClick={loginHandler}>Log in</button>
            }


        </header>

        <div className='filters'>
            <div className='items'>
                <select>
                    <option>Offers</option>
                    <option>5%</option>
                    <option>15%</option>
                    <option>25%</option>
                </select>

                <select>
                    <option>Rating</option>
                    <option>⭐⭐⭐⭐⭐</option>
                    <option>⭐⭐⭐⭐</option>
                    <option>⭐⭐⭐</option>
                    <option>⭐⭐</option>
                    <option>⭐</option>
                </select>

                <select>
                    <option>New Arrivals</option>
                    <option>highly buy</option>
                </select>
            </div>
        </div>
        <div className='vmt'>
            <h1 className="h1">Enjoy your meal with Us</h1>
            <img src={bir} width={1000} height={500} ></img>
            <div className="vm"><p>Vanakkam da mapla !<br></br> Put some valuable code <br></br> Get <b> 50% </b> Offer </p></div>
        </div>
        {
            isloggedin === "true" ? [<Form onFormAdd={FormHandler}></Form>, <Foodlist details={dishitems}></Foodlist>] : <p>PLEASE LOGIN </p>
        }
        {/* <Form onFormAdd={FormHandler}></Form>
        <Foodlist details={dishitems}></Foodlist> */}
    </>
    );

};
export default Header;
