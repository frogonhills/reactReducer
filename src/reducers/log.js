const loggedReducer = (state = false , action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return state = true ;
        case 'LOG_OUT':
            return state = false;
        default:
            return state;
    }
};



export default loggedReducer ;