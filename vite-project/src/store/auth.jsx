import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [servicesData, setServicesData] = useState("");
    const authorizationToken = `Bearer ${token}`;

    //function to stored the token in local storage
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    // this is the get the value in either true or false in the original state of token
    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedin ", isLoggedIn);

    // to check whether is loggedIn or not
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // Authenticate - to get userData
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: 'GET',
                headers: {
                    //"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData[0]);
                console.log('user data', data.userData[0]);
            } else {
                console.error('Error fetching userData',response);
            }
        } catch (error) {
            console.error('Error fetching userData',error);
        }
    };

    //find services data
    const getServiceData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/services/", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    //Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const result = await response.json();
                setServicesData(result.data);
                console.log('Services data: ', result.data);
            } else {
                console.error('Error fetching getServiceData', response);
            }
        } catch (error) {
            console.error('Error fetching getServiceData', error);
        }
    };

    useEffect(() => {
        getServiceData();
        userAuthentication();
    }, []);//run only first time

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, servicesData, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};