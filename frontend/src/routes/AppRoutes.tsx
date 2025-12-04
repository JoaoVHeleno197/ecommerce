import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/Main";
import ProductPage from "../pages/product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/profile" element={<h1>User Profile Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
