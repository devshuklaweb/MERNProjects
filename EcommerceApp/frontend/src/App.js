import { BrowserRouter, Route, Routes } from 'react-router-dom';//for router-com v6
import Navbars from './components/Navbars';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/addProduct" element={<h1>Add Product</h1>}></Route>
            <Route exact path="/listProduct" element={<h1>List Product</h1>}></Route>
          </Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
