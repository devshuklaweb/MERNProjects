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
    users: IUsers[],
    errorMsg:string
}
const UserDetails: React.FC = () => {
    const { id } = useParams<IParams | any>();
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
                    <h5 className="card-title">User Details API In React Typescript</h5>
                    <p><strong>URL Params ID:</strong> {id}</p>
                    <div className='card-body'>   
                        {errorMsg && (<p>{errorMsg}</p>)}
                        {loading && (<p>Loading...</p>)}
                        
                        <div>
                            <Link className="btn btn-primary" to={'/FetchApi'}>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;