import counterReducer from "./counter";
import loggedReducer from "./log";
import inputReducer from "./input";

import { combineReducers } from "redux"; 


const allReducers = combineReducers({
    counter : counterReducer,
    isLogged: loggedReducer,
    input:inputReducer
    
})


export default allReducers;