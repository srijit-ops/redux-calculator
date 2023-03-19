import React from 'react'
import  {initialState} from '../redux/number/initialState'
import { decrementNum, incrementNum } from '../redux/number/numberAction'
import { connect } from 'react-redux'

function Calculator(props) {
  
  return (
    <div>
      {console.log(props.num)}
        <h1>{props.num}</h1>
        <button onClick={props.incrementNum}>+</button>
        <button onClick={props.decrementNum}>-</button>
    </div>
  )
}
//console.log(state.num)
//console.log(initialState.num)

const mapStateToProps=(state=initialState)=>{
  console.log(state.num)
  return {
    num:state.num
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    decrementNum:()=>dispatch(decrementNum()),
    incrementNum:()=>dispatch(incrementNum())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Calculator)