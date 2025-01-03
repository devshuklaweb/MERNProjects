import React, { useState } from 'react';
interface IState {
    message: String;
}
const FunArgu: React.FC = () => {
    const [state, setState] = useState < IState > ({
        message: 'Welcome Shri Ram'
    });
    const handleGreet = (str:string):void => {
        setState({message:str+" Shri Ram"})
    }

    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Function With Parameters In React Typescript</h5>
                    <div><strong>Trigger Button Message:</strong> {state.message}</div>
                    <div className='container'>
                        <button className="btn btn-sm btn-primary m-2" onClick={() => handleGreet('Like')}>Like</button>
                        <button className="btn btn-sm btn-success m-2" onClick={() => handleGreet('Comment')}>Comment</button>
                        <button className="btn btn-sm btn-info m-2" onClick={() => handleGreet('Subscribe')}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunArgu;