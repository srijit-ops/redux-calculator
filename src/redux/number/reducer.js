import { initialState } from "./initialState";
import { DECREMENT_NUM, INCREMENT_NUM } from "./numberTypes";
const reducer=(state=initialState, action)=>{
    switch (action.type){
        case INCREMENT_NUM:
            console.log(state.num)
            return {
                ...state, num:state.num+1
            }
            case DECREMENT_NUM:
                console.log(state.num)
                return {
                    ...state, num:state.num-1
                }
        default:
            return state
    }

}
export default reducer