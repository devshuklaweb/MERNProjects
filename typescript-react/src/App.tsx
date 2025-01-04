import './App.css'
import Customer from './components/Customer'
import Classprops from './components/Classprops'
import FunCounter from './components/FunCounter'
import FunArgu from './components/FunArgu'
import FormHandling from './components/FormHandling'
import AuthLogin from './components/AuthLogin'
import Looping from './components/Looping'
import UsingServiceUserList from './components/UsingServiceUserList'
import UserApi from './components/fetchApi/UserApi'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/funprops' element={<Customer name="Dev" address="Rajapur" age={22} />} />
        <Route path='/classprops' element={<Classprops name="Devendra" address="civil Lines" />} />
        <Route path='/funevents' element={<FunCounter />} />
        <Route path='/funargu' element={<FunArgu />} />
        <Route path='/formhandling' element={<FormHandling />} />
        <Route path='/authlogin' element={<AuthLogin />} />
        <Route path='/Looping' element={<Looping />} />
        <Route path='/services' element={<UsingServiceUserList />} />
        <Route path='/FetchApi' element={<UserApi />} />
      </Routes>
    </>
  )
}

export default App
