import {createStore} from "redux"
import reducer from "./number/reducer"
const store= createStore(reducer)
export default store