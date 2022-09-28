import React ,{ useState} from 'react'
import './Form.css'

export default function Form(props) {
    const[fooditem, setFoodItem]= useState({
        
        name: "",
        time: "",
        location: "",
        rate: '',
        
    });
    const dishHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, name: event.target.value}
        });
    }
    
    const lHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, time: event.target.value}
        });
    }
    const qtyHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, location: event.target.value }
            
    });
}
    const rateHandle=(event)=>{
    setFoodItem((previousState)=>{
        return{...previousState, rate: event.target.value}
    });

}

    const submitHandler=(event)=>{
        event.preventDefault();
        props.onFormAdd(fooditem);
        setFoodItem({  
        name: "",
        time: "",
        location: "",
        rate: ""
    });
    }
    
    return(
        <form className="form-container" onSubmit={submitHandler} >
            <input type="text" placeholder="enter the dish name" value={fooditem.name}  onChange={dishHandle} required/>
            <input type="number" placeholder="enter the required time"  maxLength={2} value={fooditem.time} onChange={lHandle} required/>
            {/* <input type="text" placeholder="enter the location" value={fooditem.location} onChange={qtyHandle} required/> */}
            <input type="number" placeholder="enter the price" value={fooditem.rate} onChange={rateHandle} required/>
            <input type="submit"/>
        </form>
    );
};