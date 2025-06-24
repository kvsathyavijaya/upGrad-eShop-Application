import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/navbar/index.jsx";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import ProductsDetailPage from "./pages/ProductsDetailPage"; // ✅ check file name
import { AddProductForm as AddProductPage } from './pages/AddProductPage';
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details" element={<ProductsDetailPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
