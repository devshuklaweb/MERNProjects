import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../app/getUserSlice";

const Edit = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const initialState = {
        name: "",
        email: "",
        age: "",
        gender: "",
    };
    const [updatedData, setUpdatedData] = useState(initialState);

    //get all data
    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        //retrieving single data from user list
        if (id) {
            const singleData = users.find((user) => user.id === id);
            console.log("singledata preload on edit page...", singleData);
            setUpdatedData({ ...singleData });
        }
    }, []);

    //updating state as use changes input field data
    const newData = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("update data..", updatedData);
        dispatch(updateUser(updatedData));
        setUpdatedData(initialState);
        navigate("/read");
    };

    if (loading) {
        return <h2>Loading..</h2>;
    }

    return (
        <div>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2>Update the data</h2>
                    {updatedData && (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="enter name"
                                    value={updatedData.name}
                                    onChange={newData}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="enter email"
                                    value={updatedData.email}
                                    onChange={newData}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="enter age"
                                    value={updatedData.age}
                                    onChange={newData}
                                />
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={updatedData.gender === "Male"}
                                    value="Male"
                                    onChange={newData}
                                />
                                <label>Male</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={updatedData.gender === "Female"}
                                    value="Female"
                                    onChange={newData}
                                />
                                <label>Famale</label>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Edit;