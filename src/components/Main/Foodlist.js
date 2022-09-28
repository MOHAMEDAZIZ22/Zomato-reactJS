import './Foodlist.css';
import './Fooditems.js';
import Fooditems from "./Fooditems.js";

function Foodlist(props) {

    return (
        <div className='foot-container'>
    {/* <Fooditems img={props.item[0].img} name={props.item[0].name} time={props.item[0].time} distance={props.item[0].distance} rate={props.item[0].rate}></Fooditems>
    <Fooditems img={props.item[1].img} name={props.item[1].name} time={props.item[1].time} distance={props.item[1].distance} rate={props.item[1].rate}></Fooditems>
    <Fooditems img={props.item[2].img} name={props.item[2].name} time={props.item[2].time} distance={props.item[2].distance} rate={props.item[2].rate}></Fooditems>
    <Fooditems img={props.item[3].img} name={props.item[3].name} time={props.item[3].time} distance={props.item[3].distance} rate={props.item[3].rate}></Fooditems>
    <Fooditems img={props.item[4].img} name={props.item[4].name} time={props.item[4].time} distance={props.item[4].distance} rate={props.item[4].rate}></Fooditems> */}
    
    {
        props.details.length ==0 && <p className='nofood'>Please add the food items here..!</p>
    }
    
    {
            props.details.map((items)=>{
                return <Fooditems key={Math.random()} name={items.name} time={items.time} location={items.location} rate={items.rate}></Fooditems>
            })
     }
    </div>
    );
};

export default Foodlist;
