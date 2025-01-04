import React, { useState } from 'react';
import Customer from './Customer'
import Classprops from './Classprops'
import FunCounter from './FunCounter'
import FunArgu from './FunArgu'
import FormHandling from './FormHandling'
import AuthLogin from './AuthLogin'
import Looping from './Looping'
import UsingServiceUserList from './UsingServiceUserList'
import UserApi from './fetchApi/UserApi'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
const Home: React.FC = () => {
    const [count, setCount] = useState(0)
    const bg = {
        backgroundColor: 'blue',
        color: 'white'
    };
    return (
        <>
            <div className="container">
                <div>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </div>
                <h1 style={bg}>Vite + React + Typescript</h1>
                <div className="card p-15">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col p-3">
                        <Customer name="Dev" address="Rajapur" age={22} />
                    </div>
                    <div className="col p-3">
                        <Classprops name="Devendra" address="civil Lines" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FunCounter />
                    </div>
                    <div className="col">
                        <FunArgu />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FormHandling />
                    </div>
                    <div className="col">
                        <Looping />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <AuthLogin />
                    </div>
                    <div className="col">
                        <UsingServiceUserList />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <UserApi />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;