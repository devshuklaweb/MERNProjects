import React from 'react';
//create interface for getting props
interface IPROPS {
    name: String;
    prabhu: String;
    age?: Number;//? defines that its a optional parameter.
}
const Customer: React.FC<IPROPS> = ({ name, prabhu }) => {
    return (
        <>
            <div className="container">
                <h2>Its my customer functional component in react typescript</h2>
                <div>God: {prabhu}</div>
                <div>Name: {name}</div>

            </div>
        </>
    )
}
export default Customer;