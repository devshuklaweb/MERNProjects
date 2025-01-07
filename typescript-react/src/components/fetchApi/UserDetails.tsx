import React, { useEffect, useState } from 'react';
import { IUsers } from '../../Model/IUsers';
import { UserFetchApiServices } from '../../services/UserFetchApiServices';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface IParams {
    id:number
}
interface IState {
    loading: boolean,
    user: IUsers,
    errorMsg:string
}
const UserDetails: React.FC = () => {
    const { id } = useParams<IParams | any>();
    const [state, setState] = useState < IState > ({
        loading: false,
        user: {} as IUsers,
        errorMsg:''
    });

    useEffect(() => {
        if (id) {
            setState({ ...state, loading: true });
            UserFetchApiServices.getUser(Number(id))
                .then((res) => setState({
                    ...state,
                    loading: false,
                    user: res.data as IUsers  // Add type assertion here
                }))
                .catch((error) => setState({
                    ...state,
                    loading: false,
                    errorMsg: error.message
                }));
            //eslint-disable-next-line
        }
    }, [id]);
    const { loading, user, errorMsg } = state;
    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">User Details API In React Typescript</h5>
                    <p><strong>URL Params ID:</strong> {id}</p>
                    <div className='card-body'>   
                        {errorMsg && (<p>{errorMsg}</p>)}
                        {loading && (<p>Loading...</p>)}
                        
                            {user && (
                                <ul className='list-group'>
                                    <li className="list-group-item">
                                        <strong>Name: </strong>{user.name}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>User Name: </strong>{user.username}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Email: </strong>{user.email}
                                    </li>
                                </ul>
                            )}

                        <div>
                            <Link className="btn btn-primary m-3" to={'/FetchApi'}>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;