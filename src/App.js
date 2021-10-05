import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import {incremeent , decrement} from './actions';


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
    </div>
  );
}

export default App;
