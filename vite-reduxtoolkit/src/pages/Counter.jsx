import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    console.log("Counter Page: "+count);
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value < 100"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span style={{ fontSize: '14px', marginLeft: '10px', marginRight:'10px'}}>{count}</span>
                <button
                    aria-label="Decrement value > 0"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                &nbsp;&nbsp;
                <button
                    aria-label="Increment by 5"
                    onClick={() => dispatch(incrementByAmount(5)) }
                >
                    Increment By Amount
                </button>
            </div>
        </div>
    )
}