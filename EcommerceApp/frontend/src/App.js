import { BrowserRouter, Route, Routes } from 'react-router-dom';//for router-com v6
import Navbars from './components/Navbars';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ListProduct from './pages/ListProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route element={<PrivateComponent/>}>  
            <Route exact path="/addProduct" element={<AddProduct/>}></Route>
            <Route exact path="/listProduct" element={<ListProduct/>}></Route>
          </Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
