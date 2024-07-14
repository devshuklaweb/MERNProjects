import React, { ChangeEvent, useState } from 'react';
import ILogin from '../models/ILogin';
interface IState {
    user: ILogin;
}

const FormHandling: React.FC = () => {

    const [state, setState] = useState<IState>({
        user: {
            email: "dev3@gmail.com",
            password: "dev3@",
        },
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(state.user);
        alert("Login");
    }

    return (
        <>
            <div className="container">
                <div className="text-center" style={{ marginTop: '60px' }}>
                    <h2><u>handling Forms with react typescript in multiple ways
                    </u></h2>
                    <div className='row d-flex justify-content-center'>
                        <form className='col-md-6' onSubmit={handleLogin}>
                            <div className="mb-3 row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={handleChange} className="form-control" id="email" name="email" placeholder="dev3@gmail.com"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="password" name='password' onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className='col-md-12'>
                                    <button style={{ float: 'right' }} type="submit" className='btn btn-primary'>Login</button>
                                </div>
                            </div>
                        </form>
                        <div className='text-center'>
                            {JSON.stringify(state.user)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormHandling;