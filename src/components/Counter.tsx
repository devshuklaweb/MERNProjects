import React, { useState } from 'react';
interface IState {
    count: number;
}

const Counter: React.FC = () => {
    const [state, setState] = useState<IState>({ count: 0 });
    const handleInc = () => {
        setState({count:state.count+1})
    }
    const handleDec = () => {
        if(state.count > 0)
            setState({count:state.count-1})
    }
    return (
        <>
            <div className="container">
                <h3>Event Handling With React Typescript</h3>
                <div>Count: {state.count}</div>
                <div className="text-center">
                    <button className="btn-primary btn-sm" onClick={handleInc}>Inc</button>
                    <button className="btn-danger btn-sm" onClick={handleDec}>Dec</button>
                </div>
            </div>
        </>
    )
}

export default Counter;