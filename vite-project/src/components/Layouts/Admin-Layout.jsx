import { NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactMail } from "react-icons/md";


export const AdminLayout = () => {
    return (
        <>
            <h1>Admin Layout</h1>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink to="/admin/users"><FaUser /> Users</NavLink></li>
                            <li><NavLink to="/admin/contacts"><MdMiscellaneousServices  /> Contacts</NavLink></li>
                            <li><NavLink to="/admin/services"><MdMiscellaneousServices /> Services</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    )
} 