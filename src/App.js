
import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import {incremeent , decrement , login , logOut , reset} from './actions';
import House from './randompage';

import InputForm from './inputForm';


function App() {


  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  
  const dispatch = useDispatch();

  const mystyle = {
    color: "white",
    backgroundColor: "green",
    
    padding: "10px",
    fontFamily: "Arial"
  };
  return (


    <div className="App" style={mystyle} >
      
      <h1>This is home page of  </h1>
      <h2>Counter: {counter}</h2>
      
      
      {isLogged ? <h3>  ******** you are logged ******* </h3> : ""}


      <button onClick={()=>dispatch(incremeent())} >+</button>

      <button onClick={()=>dispatch(decrement())} >-</button>
      <button onClick={()=>dispatch(reset())} >Reset</button>
      <button  onClick={()=> dispatch(login()) }>Login </button>
      <button  onClick={()=> dispatch(logOut()) }>LogOut </button>
      

      <House />

      <InputForm />



      <h2>here you will change values form different JS files in React Using Reducers</h2>
      <h2> ©Shifat Ahmed </h2>

    </div>
  );
}

export default App;
