import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'
export const AdminUpdateuser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { authorizationToken } = useAuth(); //content api function
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: ''
    })

    if (!user) return <div>Loading...</div>;
    const getSingleUserData = async (id) => {
        
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
            });
            const data = await response.json();
            if (!data.message) {
                //console.log(data, "Admin User Data: getUserById");
                setUser(data);
            } else {
                toast.error(data.message);
            }
        } catch(error) {
            toast.error(error.message || "An error occurred while fetching user data.");
        }
    };

    useEffect(() => {
        getSingleUserData(id);
    }, [id]);

    const handleInput = (e) => {

        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(user),
            });
            console.log(response,'response');
            const responseData = await response.json();
            if (response.ok) {
                toast.success("User updated successfully.");
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred while updating user.");
        }
    }
    
    return (
        <>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>username</label>
                    <input
                        type='text'
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        placeholder='username'
                    />
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input
                        type='text'
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                        placeholder='email'
                    />
                </div>
                <div>
                    <label htmlFor='phone'>phone</label>
                    <input
                        type='number'
                        name='phone'
                        value={user.phone}
                        onChange={handleInput}
                    />
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>
                    Update Now
                </button>
            </form>
        </>
    )
} 