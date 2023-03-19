import {createStore, combineReducers} from "redux"
import decrementReducer from "./number/decrementReducer"
import incrementReducer from "./number/incrementReducer"
const rootReducer= combineReducers({
    increment:incrementReducer,
    decrement:decrementReducer
})
const store= createStore(rootReducer)
export default store