import React, { useState } from 'react';
//create interface for getting props
interface IPROPS {
    name: String;
    prabhu: String;
    age?: Number;//? defines that its a optional parameter.
}
//interface for state
interface Istate {
    name:String;
    title:String;
    age:number;
}
const Customer: React.FC<IPROPS> = ({ name, prabhu }) => {
    const [state,setState] = useState<Istate>({
        name:"Devesh",
        title:"Genius IT",
        age:10
    });
    return (
        <>
            <div className="container">
                <h2>Its my customer functional component in react typescript</h2>
                <div>God: {prabhu}</div>
                <div>Name: {name}</div>
            </div>
            <div className="container">
                <h2>Handling State with react typescript</h2>
                <div>Name: {state.name}</div>
                <div>Title: {state.title}</div>
                <div>Age: {state.age}</div>
            </div>
        </>
    )
}
export default Customer;