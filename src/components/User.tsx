import React from 'react';

interface Iprop {
    name: String;
    designation: String;
}

export default class  extends React.Component<Iprop> {
    constructor(props:Iprop) {
        super(props);
    }
    render() {
        let {name,designation} = this.props;
        return(
            <>
                <div className="container">
                    <h3>User Class components with props</h3>
                    <div>Name: {name}</div>
                    <div>Designation: {designation}</div>
                </div>
            </>
        )
    }
}