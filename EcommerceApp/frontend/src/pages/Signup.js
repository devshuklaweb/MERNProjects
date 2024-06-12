import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name,setName] = useState("Geniusitsolution");
    const [email,setEmail] = useState("dev@geniusitsolution.in");
    const [password,setPassword] = useState("dev@genius");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth) {
            navigate("/");
        }
    }) 

    const register = async () => {
        const data = await fetch("http://localhost:5000/register",{
            headers: {
                'Content-Type':'application/json'
            },
            method:'post',
            body:JSON.stringify({name,email,password})
        });
        let result = await data.json();
        if(result) {
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        } else {
            console.log(result,"API Result");
        }
    }
    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2><u>Register</u></h2>
                    <form>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="name" name="name" placeholder="Geniusitsolution" defaultValue={name} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" name="email" placeholder="dev@geniusitsolution.in" defaultValue={email} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="password" onChange={(e)=>setPassword(e.target.value)} className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" name='password' defaultValue={password} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <button type="button" className='btn btn-primary' onClick={register}>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;