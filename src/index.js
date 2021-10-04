import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {createStore} from 'redux';
// //Action

// const incremeent = ()=>{
//   return{
//     type: 'increment'
//   }
// }

// const decrement = ()=>{
//   return{
//     type:'decrement'
//   }
// }
// //reduceer
// const counter = (state=0 ,action)=>{
//   switch(action.type){
//     case 'increment':
//       return state +1;
//     case 'decrement':
//       return state-1;
//   }
// }


// let store = createStore(counter);

// //display store

// store.subscribe(()=> console.log(store.getState()));




// //Dispatch

// store.dispatch(incremeent());
// store.dispatch(incremeent());
// store.dispatch(incremeent());










ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
