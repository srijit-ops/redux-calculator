import { initialState } from "./initialState";
import { DECREMENT_NUM } from "./numberTypes";
const decrementReducer=(state=initialState, action)=>{
    switch (action.type){
        case DECREMENT_NUM:
            console.log("-")
            return {
                ...state, num:state.num-1
            }
        default:
            return state
    }

}
export default decrementReducer