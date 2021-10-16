export const incremeent = () =>{
    return {
        type: 'INCREMENT'
    };
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    };
}


export const login = ()=>{
    return{
        type:'SIGN_IN'
    };
}

export const logOut = ()=>{
    return{
        type:'LOG_OUT'
    };
}


export const input = (event)=>{
    return{
        type:'INPUT',
        text: event
    };
}

export const reset = ()=>{
    return {
        type: 'RESET'
    }
}



