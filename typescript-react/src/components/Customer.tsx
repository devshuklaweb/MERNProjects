import React from 'react';
interface IPROPS {
    name: String;
    address: String;
    age ?: number; //? show its an optional    
}
const Customer: React.FC<IPROPS> = ({ name, address, age }) => {
    //{name,address,age} = Object destructor kiya gya hai
    return (
        <div>
            <h1>Functional Components In React Typescript</h1>
            <div>Name: {name}</div>
            <div>Address: {address}</div>
            {age && <div>Age: {age ?? 0}</div>}
        </div>
    );
};

export default Customer;