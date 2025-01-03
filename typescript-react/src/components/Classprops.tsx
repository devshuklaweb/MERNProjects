import React from 'react';
interface IPROPS {
    name: String;
    address: String;
    age?: number; //? show its an optional    
}
interface IState {
    name: String;
    email: String;
}
export default class Classprops extends React.Component<IPROPS,IState> {

    constructor(props:IPROPS) {
        super(props);
        this.state = {
            name: 'Deepak',
            email: 'devendra@gmail.com'
        }
    }
    render() {
        let { name, address, age } = this.props;
        return (
            <>
                <div className='card m-2'>
                    <div className="card-body">
                        <h5 className="card-title">Class Components Props In React Typescript</h5>
                        <div>Name: {name}</div>
                        <div>Address: {address}</div>
                        <div>Age: {age ?? 0}</div>
                    </div>
                </div>
                <div className='card m-2'>
                    <div className="card-body">
                        <h5 className="card-title">Handling State Class Component with react typescript</h5>
                        <div>Name: {this.state.name}</div>
                        <div>Email: {this.state.email}</div>
                    </div>
                </div>
            </>
        );
    }
}