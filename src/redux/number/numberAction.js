import { DECREMENT_NUM, INCREMENT_NUM } from "./numberTypes"

const incrementNum=()=>{
    return{
        type: INCREMENT_NUM
    }
}
const decrementNum=()=>{
    return{
        type: DECREMENT_NUM
    }
}
 export {incrementNum, decrementNum}
