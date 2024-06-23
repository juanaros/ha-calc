import Calculator from "./sections/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./sections/Login";
import Register from "./sections/Register";
import Navbar from './components/Navbar';

const App = () => {
  return (
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App;