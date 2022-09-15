import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
// import { CustomCursor } from "./components";
import {
  Home,
  Login,
  Products,
  Register,
  Product,
  VendorHome,
  Error,
  Orders,
  Checkout,
  CustomOrderRequest,
  VendorRequests,
  VendorProducts,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App scrollbar-hide">
        {/* <CustomCursor /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/vendor-home" element={<VendorHome />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/custom-order" element={<CustomOrderRequest />} />
          <Route exact path="/vendor-requests" element={<VendorRequests />} />
          <Route exact path="/vendor-products" element={<VendorProducts />} />
          <Route path="/errorPage" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
