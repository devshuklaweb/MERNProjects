import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About' // jab ham kuch export default se import karte hai toh
import { Home } from './pages/Home' //name export ko import karne ke liye
import { Contact } from './pages/Contact'
import { Service } from './pages/Service'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import { Error } from './pages/Error'
import { Logout } from './pages/Logout'
import { AdminLayout } from "./components/Layouts/Admin-Layout"
import { AdminUsers } from './pages/Admin-Users'
import { AdminContacts } from './pages/Admin-Contacts'
import { AdminServices } from './pages/Admin-Services'
import { AdminUpdateuser } from './pages/Admin-Updateuser'
import { Counter } from './pages/Counter'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Service />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />}></Route>
            <Route path='users/:id/edit' element={<AdminUpdateuser />}></Route>
            <Route path='contacts' element={<AdminContacts />}></Route>
            <Route path='services' element={<AdminServices />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
