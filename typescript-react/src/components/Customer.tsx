import React, { useState } from 'react';
interface IPROPS {
    name: String;
    address: String;
    age ?: number; //? show its an optional    
}
interface IState {
    name: String;
    email: String;
}
const Customer: React.FC<IPROPS> = ({ name, address, age }) => {
    const [state, setState] = useState<IState>({
        name: 'Shri Ram',
        email: 'dev@gmail.com',
    })
    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Class Components Props In React Typescript</h5>
                    <div>Name: {name}</div>
                    <div>Address: {address}</div>
                    {age && <div>Age: {age ?? 0}</div>}
                </div>
            </div>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Handling State Class Component with react typescript</h5>
                    <div>Name: {state.name}</div>
                    <div>Email: {state.email}</div>
                </div>
            </div>
        </>
    );
};

export default Customer;