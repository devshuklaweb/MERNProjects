import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";
//https://www.youtube.com/watch?v=kFOunbx3wVc&list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_&index=30
export const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    return <Navigate to="/login" />
}