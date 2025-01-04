import React, { useState } from 'react';
interface IState {
    isLogin: boolean;
}
const AuthLogin: React.FC = () => {
    const [state, setState] = useState < IState > ({
        isLogin: false
    });
    const handleLogin = (): void => {
        setState({ isLogin: true });
    }
    const handleLogout = (): void => {
        setState({ isLogin: false });
    }

    return (
        <>
            <div className='card m-2'>
                <div className="card-body">
                    <h5 className="card-title">Conditional Rendering In React Typescript</h5>
                    {state.isLogin && state.isLogin ? (
                        <div className='card-body'>
                            <p>Welcome User</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className='card-body'>
                            <p>Please Login For Dashboard</p>
                            <button onClick={handleLogin}>Login</button>
                        </div> 
                    )}
                    <div style={{height:'135px'}}>&nbsp;</div>
                </div>
            </div>
        </>
    );
};

export default AuthLogin;