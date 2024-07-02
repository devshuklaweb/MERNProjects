import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser, deleteUser } from "../app/getUserSlice";
import { Link } from "react-router-dom";
import UserModal from "./UserModal";
const Read = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [radioCheck, setRadioCheck] = useState("");
    const [id, setId] = useState();
    const data = useSelector((state) => {
        return state.app;
    });
    console.log("radio...", radioCheck);
    useEffect(() => {
        dispatch(getAllUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (data.loading) {
        return <>
            <div className="sectionbody text-center" style={{ marginTop: '60px' }}><h2>Loading...</h2> </div>
        </>;
    }
    if (data.error != null) {
        return <>
            <div className="sectionbody text-center" style={{ marginTop: '60px' }}><h3>{data.error}</h3> </div>
        </>;
    }
    console.log("final data to loop", data);
    return (
        <>  {
                show &&
                <UserModal handleShow={handleShow}  handleClose={handleClose} id={id} />
            }

            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2>
                        <u>All Users</u>
                    </h2>
                </div>

                <div className="d-flex justify-content-between align-items-center mx-4">
                    <h1></h1>
                    <div className="d-flex gap-2">
                        <div>
                            <input class="form-check-input" type="radio" name="gender" checked={radioCheck === ""} onChange={(e) => setRadioCheck("")} />
                            <label class="form-check-label">All</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" value="Male" checked={radioCheck === "Male"} onChange={(e) => setRadioCheck(e.target.value)} />
                            <label class="form-check-label">Male</label>
                        </div>
                        <div>
                            <input class="form-check-input" type="radio" name="gender" value="Female" checked={radioCheck === "Female"} onChange={(e) => setRadioCheck(e.target.value)} />
                            <label class="form-check-label">Female</label>
                        </div>
                    </div>
                </div>
                {data?.users
                    .filter((item) => {
                        if (data.searchData.length === 0) {
                            return item;
                        } else {
                            return item.name
                                .toLowerCase()
                                .includes(data.searchData.toLowerCase());
                        }
                    })
                    .filter((item) => {
                        if (radioCheck === "") {
                            return item;
                        } else if (radioCheck === "Male") {
                            return item.gender === radioCheck;
                        } else if (radioCheck === "Female") {
                            return item.gender === radioCheck;
                        }
                    })
                    .map((ele) => (
                        <div key={ele.id} className="card w-75 mx-auto my-2">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.gender}</h6>
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    //onClick={() => setId(ele.id) && handleShow()}
                                    onClick={() => [setId(ele.id), handleShow()]}
                                >
                                    View
                                </button>
                                <Link onClick={() => dispatch(deleteUser(ele.id))} className="card-link mx-2" >
                                    Delete
                                </Link>
                                <Link to={`/edit/${ele.id}`}>
                                    <span className="card-link mx-2">Edit</span>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Read;