import React, { useState } from 'react';
import { User } from '../Model/User';
interface IState {
    user: User;
}
const FormHandling: React.FC = () => {
    const [state, setState] = useState < IState > ({
        user: {
            email: '',
            password: ''
        }
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        /*
        setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
        */
        setState({
            user: {
                ...state.user,
                [name]: value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert("Submit button calling")
    }

    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Handling Forms with react typescript in multiple ways</h5>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={handleChange} className="form-control" name="email" value={state.user.email} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" name="password" onChange={handleChange} className="form-control" value={state.user.password} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>
                        <div className="container">
                            <p>
                                <strong>State Value: </strong>{JSON.stringify(state.user)}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FormHandling;