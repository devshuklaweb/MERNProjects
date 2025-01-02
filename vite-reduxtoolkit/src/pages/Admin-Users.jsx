import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const AdminUsers = () => {
    const [list, SetList] = useState([]);
    const { authorizationToken } = useAuth();
    const getAllUsers = async () => {
        
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
            });
            const data = await response.json();
            if (data.message) {
                toast.error(data.message);
            } else {
                SetList(data);
            }
        } catch(error) {
            toast.error(error);
        }
    };

    const deleteRecord = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken
                    },
                });
                const responseData = await response.json();
                if (response.ok) {
                    toast.success(responseData.extraDetails ? responseData.extraDetails : responseData.message);
                    getAllUsers();
                } else {
                    toast.error('User not delete. Try again');
                }
            } catch (error) {
                toast.error(error);
            }
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);
    
    return (
        <>
            <h1>AdminUsers Listing</h1>
            <table style={{ width: '100%' }}>
                <thead style={{ backgroundColor: '#d4d4d4' }}>
                    <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Phone No</th>
                        <th>User Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {list.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td>{element.isAdmin ? 'Admin User' : 'User'}</td>
                                <td>
                                    <Link to={`/admin/users/${element._id}/edit`}>Edit</Link> &nbsp;
                                    <button type="button" onClick={() => deleteRecord(element._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </>
    )
} 