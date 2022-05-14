import "./App.scss";
import { CustomCursor } from "./components";
import { Home, Login, Products, Register } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
