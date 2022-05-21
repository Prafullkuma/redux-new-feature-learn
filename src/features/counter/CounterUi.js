import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { increament, decrement, reset, increamentByAmount } from './counter';

const CounterUi = () => {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  const resetAll =()=>{
      setAmount(0)
      dispatch(reset())
  }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increament())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <div>
            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=> dispatch(increamentByAmount(amount))}> Add mount </button>
        </div>
        <div>
            <button onClick={resetAll}>Reset All</button>
        </div>
    </div>
  )
}

export default CounterUi
