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