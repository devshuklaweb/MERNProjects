import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { createUser } from "../app/getUserSlice";
const Create = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user data...", data);
        dispatch(createUser(data));
        navigate("/read");
    };

    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2>
                        <u>Add Product</u>
                        <Link style={{ float: 'right', marginTop: '8px' }} className={`btn btn-primary text-end`} to="/listProduct">List Product</Link>
                    </h2>
                    <form style={{ paddingTop: '15px' }} onSubmit={handleSubmit}>

                        <div>
                            <input type="text" name="name" placeholder="enter name" onChange={updateData} />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="enter email" onChange={updateData} />
                        </div>
                        <div>
                            <input type="number" name="age" placeholder="enter age" onChange={updateData} />
                        </div>
                        <div>
                            {
                                 //checked={updateData.gender === "Male"}
                            }
                            <input type="radio" name="gender"  value="Male" onChange={updateData} />
                            <label>Male</label>
                            <input type="radio" name="gender"  value="Female" onChange={updateData} />
                            <label>Famale</label>
                            {
                                //checked={updateData.gender === "Female"}
                            }
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;