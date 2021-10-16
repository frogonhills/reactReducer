


const inputReducer = (state = '' , action)=>{
    console.log('reducer ' , action);
    switch(action.type){
        case 'INPUT':
            return state = action.text;

        default:
            return  '';
    }
    
}



export default inputReducer ;