export const ADD_ORDER = "ADD_ORDER"
export const REMOVE_ORDER = "REMOVE_ORDER"
export const DELETE_ALL = "DELETE_ALL"

// export const add_order =()=>{
//     return {
//         type: ADD_ORDER
//     }
// }

export const add_order = (el)=>{
return {
    type:ADD_ORDER,
    title: el.title,
    price:el.price,
}
}
export const remove_order = (index) =>{
    return{
        type: REMOVE_ORDER,
        payload: {index}
    }
}
export const delete_all = () =>{
    return {
        type: DELETE_ALL,
    }
}
   