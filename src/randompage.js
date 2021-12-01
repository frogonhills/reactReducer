import { useSelector , useDispatch} from 'react-redux';


import {login } from './actions';


export default function House(){
    
    const input = useSelector(state =>state.input);

    const dispatch = useDispatch();



    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };








    return(
        <span>
            <div style={mystyle} >
                <h1>This is page 1 </h1>
                <h2> Input from page 2 is : {input} </h2>
                <br />
                
                <button onClick={()=> dispatch(login())}    > LOGIN form page 1</button>
            </div>
        </span>
    )
}

