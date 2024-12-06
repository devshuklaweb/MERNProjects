import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
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
            console.log(data, "Admin User Data");
            SetList(data);
        } catch(error) {
            toast.error(error);
        }
    };
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

                    {Array.isArray(list) && list.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td>{element.isAdmin ? 'Admin User' : 'User'}</td>
                                <td>
                                    <button type="button">Edit</button> &nbsp;
                                      <button type="button">Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </>
    )
} 