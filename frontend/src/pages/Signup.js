import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState("Geniusitsolution");
    const [email, setEmail] = useState("dev@geniusitsolution.in");
    const [password, setPassword] = useState("dev@genius");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    })

    const register = async () => {
        const data = await fetch("http://localhost:5000/register", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ name, email, password })
        });
        let result = await data.json();
        if (result) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate("/");
        } else {
            console.log(result, "API Result");
        }
    }
    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2><u>Register</u></h2>
                    <div className='row d-flex justify-content-center'>
                        <form className='col-md-6'>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" name="name" placeholder="Geniusitsolution" defaultValue={name} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" placeholder="dev@geniusitsolution.in" defaultValue={email} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="password" onChange={(e) => setPassword(e.target.value)} className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="password" name='password' defaultValue={password} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className='col-md-12'>
                                    <button style={{ float: 'right' }} type="button" className='btn btn-primary' onClick={register}>Signup</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;