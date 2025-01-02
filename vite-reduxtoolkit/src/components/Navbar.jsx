import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Logout } from '../pages/Logout'
//import { useAuth } from '../store/auth'

export const Navbar = () => {

  // const { isLoggedIn } = useAuth();
  // console.log("login or not ", isLoggedIn);
  const  isLoggedIn  = false;
  
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo-brand'>
            <NavLink to='/'>Mern Web Admin</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to='/'> Home </NavLink>
              </li>
              <li>
                <NavLink to='/counter'> Counter Using React Toolkit </NavLink>
              </li>
              <li>
                <NavLink to='/about'> About </NavLink>
              </li>
              <li>
                <NavLink to='/services'> Services </NavLink>
              </li>
              <li>
                <NavLink to='/contact'> Contact </NavLink>
              </li>
              {
                isLoggedIn
                  ?
                  <>
                    <li>
                      <NavLink to='/admin/users'> Admin User </NavLink>
                    </li>
                    <li>
                      <NavLink to='/logout'> Logout </NavLink>
                    </li>
                  </>
                  :
                  <>
                    <li>
                      <NavLink to='/register'> Register </NavLink>
                    </li>
                    <li>
                      <NavLink to='/login'> Login </NavLink>
                    </li>
                  </>}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
