import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
export const AdminServices = () => {
    const [list, SetList] = useState([]);
    const { authorizationToken } = useAuth();
    const getAllServices = async () => {

        try {
            const response = await fetch("http://localhost:5000/api/admin/services", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
            });
            const data = await response.json();
            console.log(data, "Admin Services Data");
            SetList(data);
        } catch (error) {
            toast.error(error);
        }

    };
    useEffect(() => {
        getAllServices();
    }, []);

    const deleteRecord = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/services/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken
                    },
                });
                const responseData = await response.json();
                if (response.ok) {
                    toast.success(responseData.extraDetails ? responseData.extraDetails : responseData.message);
                    getAllServices();
                } else {
                    toast.error('Service not delete. Try again');
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
            <h1>Admin Services Page</h1>
            <table style={{ width: '100%' }}>
                <thead style={{ backgroundColor: '#d4d4d4' }}>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Provider</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {Array.isArray(list) && list.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.service}</td>
                                <td>{element.price}</td>
                                <td>{element.provider}</td>
                                <td>{element.description}</td>
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