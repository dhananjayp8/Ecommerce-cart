export const Add=(item)=>{
    return{
        type:"ADD_CART",
        payload:item

    }
}

// remove
export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        payload:id

    }
}