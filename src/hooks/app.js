import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout'; // Adjust this import based on your file structure
import SignIn from './SignIn'; // Your SignIn component
import SignUp from './SignUp'; // Your SignUp component
import ProductsPage from './ProductsPage'; // Component to display products
import ProductDetailsPage from './ProductDetailsPage'; // Component for product details

function App() {
  const [addresses, setAddresses] = useState([]);
  const [singleAddress, setSingleAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all addresses
        const allAddressesResponse = await axios.get('http://localhost:9797/api/addresses');
        setAddresses(allAddressesResponse.data);

        // Fetch a specific address (if available)
        if (allAddressesResponse.data.length > 0) {
          const addressId = allAddressesResponse.data[0]._id; // Adjust as needed
          const singleAddressResponse = await axios.get(`http://localhost:9797/api/addresses/${addressId}`);
          setSingleAddress(singleAddressResponse.data);
        }

        // Call the test API (optional)
        const testApiResponse = await axios.get('http://localhost:9797/api/addresses/getData');
        console.log(testApiResponse.data);

      } catch (error) {
        console.error(error);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<ProductsPage data={addresses} />} />
        <Route path="/product-details" element={<ProductDetailsPage address={singleAddress} />} />
        <Route path="/add-product" element={<div>Add Product Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
