import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
export const AdminContacts = () => {
    const [list, SetList] = useState([]);
    const { authorizationToken } = useAuth();
    const getAllContacts = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
            });
            const data = await response.json();
            console.log(data, "Admin Contacts Data");
            SetList(data);
        } catch (error) {
            toast.error(error);
        }

    };
    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <>
            <h1>AdminContacts Page</h1>
            <table style={{ width: '100%' }}>
                <thead style={{ backgroundColor: '#d4d4d4' }}>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {Array.isArray(list) && list.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.message}</td>
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