import { initialState } from "./initialState";
import { INCREMENT_NUM } from "./numberTypes";
const incrementReducer=(state=initialState, action)=>{
    switch (action.type){
        case INCREMENT_NUM:
            console.log(state.num)
            return {
                ...state, num:state.num+1
            }
        default:
            return state
    }

}
export default incrementReducer