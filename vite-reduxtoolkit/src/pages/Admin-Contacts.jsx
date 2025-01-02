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
            if (data.message) {
                toast.error(data.message);
            } else {
                SetList(data);
            }
        } catch (error) {
            toast.error(error);
        }
    };
    useEffect(() => {
        getAllContacts();
    }, []);

    const deleteRecord = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken
                    },
                });
                const responseData = await response.json();
                if (response.ok) {
                    toast.success(responseData.extraDetails ? responseData.extraDetails : responseData.message);
                    getAllContacts();
                } else {
                    toast.error('Contact not delete. Try again');
                }
            } catch (error) {
                toast.error(error);
            }
        }
    }

    const editRecord = (id) => {
        console.log("editRecord ", id);
    }

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
                                    <button type="button" onClick={() => editRecord(element._id)}>Edit</button> &nbsp;
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