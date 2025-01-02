import React from 'react';
interface IPROPS {
    name: String;
    address: String;
    age?: number; //? show its an optional    
}
export default class Classprops extends React.Component<IPROPS> {

    constructor(props:IPROPS) {
        super(props);

    }
    render() {
        let { name, address, age } = this.props;
        return (
            <div className='card'>
                <h1>Class Components Props In React Typescript</h1>
                <div>Name: {name}</div>
                <div>Address: {address}</div>
                <div>Age: {age ?? 0}</div>
            </div>
        );
    }
}