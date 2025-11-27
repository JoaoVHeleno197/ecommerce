import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
