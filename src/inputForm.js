



import React from 'react'
import {  useDispatch } from 'react-redux'
import { useState } from 'react';
import {input , reset} from './actions';



const InputForm = () => {




    const [data , setData] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();
        dispatch(input(data))
        
    }



    


    return (
        <div>
            <form>
                <label>

                    input & reset form page 2 : 
                    
                    <input type="text" name="name" onChange={event => setData(event.target.value)} />
                </label>
                <button onClick={onSubmit} >kilo</button>
                
            </form>


            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={()=>dispatch(reset())} >Reset form diff page</button>
            


            
            
            
        </div>
    )
}

export default InputForm
