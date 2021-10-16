import { useSelector , useDispatch} from 'react-redux';


import {login } from './actions';


export default function House(){
    
    const input = useSelector(state =>state.input);

    const dispatch = useDispatch();





    return(
        <span>
            <h1>thi is form another  page 1 : {input}</h1>
            <br />
            
            <button onClick={()=> dispatch(login())}    >from House LOGIN</button>
        </span>
    )
}

