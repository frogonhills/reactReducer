



import React from 'react'
import {  useDispatch } from 'react-redux'
import { useState } from 'react';
import {input , reset ,logOut} from './actions';



const InputForm = () => {




    const [data , setData] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(input(data))
        
    }



    const mystyle = {
        color: "white",
        backgroundColor: "orange",
        
        padding: "10px",
        fontFamily: "Arial"
      };



    


    return (
        <div style={mystyle} >
            <h1> This is page 2 </h1>

            <div>
                <form>
                    <label>

                        input & reset form page 2 : 
                        
                        <input type="text" name="name" onChange={event => setData(event.target.value)} />
                    </label>
                    <button onClick={onSubmit} >INPUT</button>
                    
                </form>
            </div>


            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                 <button onClick={()=>dispatch(reset())} >Reset form page 1</button>
            </div>
            <br/>
            <div>
            <button  onClick={()=> dispatch(logOut()) }>LogOut from page 2 </button>
            </div>
            
            


            
            
            
        </div>
    )
}

export default InputForm
