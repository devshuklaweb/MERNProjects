import React, { useEffect, useState } from 'react';
import { IUsers } from '../../Model/IUsers';
import { UserFetchApiServices } from '../../services/UserFetchApiServices';
interface IState {
    loading: boolean,
    users: IUsers[],
    errorMsg:string
}
const UsingServiceUserList: React.FC = () => {
    const [state, setState] = useState < IState > ({
        loading: false,
        users: [] as IUsers[],
        errorMsg:''
    });

    useEffect(() => {
        setState({ ...state, loading: true });
        UserFetchApiServices.getAllUser()
            .then((res) => setState({
                ...state, loading: false, users: res.data as IUsers[]  // Add type assertion here
                //...state, loading: false, users:res.data
            }))
            .catch((error) => setState({
                ...state, loading: false, errorMsg: error.message
            }));
        //eslint-disable-next-line
    }, []);
    const { loading, users, errorMsg } = state;
    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Fetching Data From Server API In React Typescript</h5>
                    <div className='card-body'>   
                        {errorMsg && (<p>{errorMsg}</p>)}
                        {loading && (<p>Loading...</p>)}
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 && users.map((item, key) => (
                                    <tr key={key}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
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