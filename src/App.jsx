import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./common/layout";
import { SignIn } from "./component/signin-form";
import { SignUp } from "./component/signup-form";
import { ProductsPage } from "./component/products-page";
import { ProductDetailsPage } from "./component/product-details-page";
import { useAuth } from "./hooks/use-auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddProductForm } from "./component/add-product-form";
import { ModifyProductForm } from "./component/modify-product-form";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to={"/products"} replace />
              ) : (
                <Navigate to={"/sign-in"} replace />
              )
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/products"
            element={isLoggedIn ? <ProductsPage /> : <Navigate to="/sign-in" />}
          />
          <Route
            path="/product-details"
            element={
              isLoggedIn ? <ProductDetailsPage /> : <Navigate to="/sign-in" />
            }
          />
          <Route path="/add-product" element={<AddProductForm />} />
          <Route path="/modify-product" element={<ModifyProductForm />} />

          <Route
            path="*"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" />
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
