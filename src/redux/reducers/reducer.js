const INIT_STATE={
    carts:[]
};


export const cartReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return {
                ...state,
                carts:[...state.carts,action.payload]
            }
        case "RMV_CART":
            const data=state.carts.filter((ele)=>ele.id!==action.payload)
            return{
              ...state,
              carts:data
            }    
            default:
                return state
    }
}