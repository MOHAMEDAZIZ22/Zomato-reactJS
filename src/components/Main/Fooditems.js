
import React,{ useState} from 'react';
import './Fooditems.css';
import burger from "../images/burger.jpg";
import biryani from "../images/biryani1.png";
import noodle from "../images/noodle.jpg";
import parotta from "../images/parotta1..jpg";
import combo from "../images/combo.jpg";

function Fooditems(props) {
    const [rate, setRate] = useState(props.rate);
    
    const[like,setLike]=useState("unlike");
    const likeHandler=(event)=>{
        event.preventDefault();
        if (like=="unlike") {
            setLike("liked")
        } else {
            setLike("unlike")
        }
    }
    const foodimages = [burger,biryani,noodle,parotta,combo];
    const offer = () => {
        setRate(props.rate / 2);
    
    }
    return (
        <>
            <div className='fooditems'>
                <div className='dish'>
                    <img src={foodimages[Math.floor(Math.random()*(foodimages.length-1))]} alt={props.name}></img>
                    <div>
                        <p><h2>{props.name}</h2></p>
                        {/* <p>{props.time}min</p> */}
                        {/* <p>{props.location}</p> */}
                        <p>{rate}RS</p>
                        <button className="offer" onClick={offer}>Apply offer 50%</button>
                    </div>
                   
                </div>
                <div className='likecover'><p className={like} onClick={likeHandler}>&#9829;</p></div>

            </div>
        </>
    );

};
export default Fooditems;
