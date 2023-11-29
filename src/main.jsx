import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Product from './components/Product.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import Contact from './components/Contact.jsx';
import products from './data/products.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
        {products.map((product) => (
          <Route
            key={product.productName}
            path={`/product/${product.productName}`}
            element={<Product product={product} />}
          />
        ))}
      </Routes>
    </React.StrictMode>
  </Router>
);
