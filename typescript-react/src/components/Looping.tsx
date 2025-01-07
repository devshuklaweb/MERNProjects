import React, { useState } from 'react';
import { UserList } from '../Model/UserList';
interface IState {
    user: UserList[];
}
const Looping: React.FC = () => {
    const [state] = useState < IState > ({
        user: [
            { sno: 1, name: "Devendra", age:22},
            { sno: 2, name: "Devendra2", age: 22},
            { sno: 3, name: "Devendra3", age: 32 },
            { sno: 4, name: "Devendra4", age: 32 },
            { sno: 5, name: "Devendra5", age: 32 },
        ]
    });
    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Handling Looping And Iteration In React Typescript</h5>
                    <div className='card-body'>                       
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.user.length > 0 && state.user.map((item, key) => (
                                    <tr key={key}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Looping;