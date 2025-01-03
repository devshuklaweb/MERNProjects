import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customer from './components/Customer'
import Classprops from './components/Classprops'
import FunCounter from './components/FunCounter'
import FunArgu from './components/FunArgu'
import FormHandling from './components/FormHandling'
import AuthLogin from './components/AuthLogin'
function App() {
  const [count, setCount] = useState(0)
  const bg = {
    backgroundColor: 'blue',
    color:'white'
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
            <FunCounter/>
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
            <AuthLogin />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
