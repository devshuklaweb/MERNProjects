import React, { useState } from 'react';
import { UserList } from '../Model/UserList';
import { UserService } from '../services/UserService';
interface IState {
    user: UserList[];
}
const UsingServiceUserList: React.FC = () => {
    const [state, setState] = useState < IState > ({
        user: UserService.getAllUser(),
    });
    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Services In React Typescript | How To Use Service In React</h5>
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

export default UsingServiceUserList;