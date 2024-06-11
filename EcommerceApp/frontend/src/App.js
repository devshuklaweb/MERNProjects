import { BrowserRouter, Route, Routes } from 'react-router-dom';//for router-com v6
import Navbars from './components/Navbars';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
