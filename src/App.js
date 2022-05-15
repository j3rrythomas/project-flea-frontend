import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { CustomCursor } from "./components";
import { Home, Login, Products, Register, Product } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App scrollbar-hide">
        <CustomCursor />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
