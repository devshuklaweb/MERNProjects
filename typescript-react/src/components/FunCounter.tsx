import React, { useState } from 'react';
interface IState {
    count: number;
}
const Customer: React.FC = () => {
    const [state, setState] = useState<IState>({
        count: 0
    });
    const handleInc = () => {
        if (state.count < 10) {
            setState({ count: state.count + 1 });
        } else {
            alert("Maximum increment less than equal to 10")
        }
    }
    const handleDec = () => {
        if (state.count > 0) {
            setState({ count: state.count - 1 });
        } else {
            alert("Minimum decrement greater than equal to 0")
        }
    }

    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Functional Components - Event Handling With React Typescript</h5>
                    <div>Counter Value: {state.count}</div>
                    <div className='container'>
                        <button className="btn btn-sm btn-primary m-2" onClick={handleInc}>Increment</button>
                        <button className="btn btn-sm btn-success m-2" onClick={handleDec}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customer;