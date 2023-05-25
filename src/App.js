import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import Details from "./components/Details";
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  const API = "http://localhost:8000/products";

  // ! CRUD - create, read, update, delete

  // ! для хранения полученных продуктов
  const [products, setProducts] = useState([]);

  // ! create (post request)
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //  ! read (get request)
  async function getProducts() {
    let result = await axios.get(API);
    // console.log(result);
    setProducts(result.data);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList getProducts={getProducts} products={products} />
          }
        />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
