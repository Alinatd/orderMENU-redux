import { ADD_ORDER, DELETE_ALL, REMOVE_ORDER } from "../actions"

const defaulState = {
  
    order:[],
    totalPrice:0,
    totalCount:0
}
 export const rootReducer = (state=defaulState,action)=>{
    switch(action.type){
        case ADD_ORDER:
            return {
                ...state,
                order:[
                    ...state.order,
                    {
                        title:action.title,
                        price:action.price
                    }
                ]
            }
            case REMOVE_ORDER:
               const updatedOrders = [...state.order];
               updatedOrders.splice(action.payload.index, 1);
                  return {
                    ...state,
                    order: updatedOrders,

                  }
                  case DELETE_ALL:
                    return {
                        ...state,
                        order: [],
                        totalPrice:0,
                        totalCount:0}
        default:
            return state

    }
}