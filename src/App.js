
import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import {incremeent , decrement , login , logOut , reset} from './actions';
import House from './randompage';

import InputForm from './inputForm';


function App() {


  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  
  const dispatch = useDispatch();
  return (


    <div className="App">
      <h1>Counter {counter}</h1>
      
      
      {isLogged ? <h3>is logged</h3> : ""}


      <button onClick={()=>dispatch(incremeent())} >+</button>

      <button onClick={()=>dispatch(decrement())} >-</button>
      <button onClick={()=>dispatch(reset())} >Reset</button>
      <button  onClick={()=> dispatch(login()) }>login </button>
      <button  onClick={()=> dispatch(logOut()) }>logOut </button>
      

      <House />

      <InputForm />

    </div>
  );
}

export default App;
