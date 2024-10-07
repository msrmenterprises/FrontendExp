import React from 'react'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../components/lib/counter/counterSlice'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}