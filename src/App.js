import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import './style/style.css';
import Layout from './Layout';
import Homepage from './Page/Homepage';
import CartPage from './Page/CartPage';
import SearchPage from "./Page/SearchPage";
import Product from "./Page/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/food" element={<SearchPage />}/>
          <Route path="/subway" element={<SearchPage />}/>
          <Route path="/hotel" element={<SearchPage />}/>
          <Route path="/temple" element={<SearchPage />}/>
          <Route path="/surfing" element={<SearchPage />}/>
          
          <Route path="/product0" element={<Product />}/>
          <Route path="/product1" element={<Product />}/>
          <Route path="/product2" element={<Product />}/>
          <Route path="/product3" element={<Product />}/>
          <Route path="/product4" element={<Product />}/>
          <Route path="/product5" element={<Product />}/>
          <Route path="/product6" element={<Product />}/>
          <Route path="/product7" element={<Product />}/>
          <Route path="/product8" element={<Product />}/>
          <Route path="/product9" element={<Product />}/>
          <Route path="/product10" element={<Product />}/>
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
