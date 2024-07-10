import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
