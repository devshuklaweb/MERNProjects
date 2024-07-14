import React, { useState } from 'react'
interface IState {
    message: String;
}
const FunWithParameter = () => {
    const [state, setState] = useState<IState>({ message: 'Welcome' });
    const handleAct = (action:string) => {
        setState({message:action});
    }
    return (
        <>
            <div className="container">
                <h3>Function With Parameters In React Typescript</h3>
                <div className='text-center'>{state.message}</div>
                <div className="text-center">
                    <button className="btn-primary btn-sm" onClick={()=>handleAct("Like")}>Like</button>
                    <button className="btn-danger btn-sm" onClick={()=>handleAct("Comment")}>Comment</button>
                    <button className="btn-danger btn-sm" onClick={()=>handleAct("Subscribe")}>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default FunWithParameter;