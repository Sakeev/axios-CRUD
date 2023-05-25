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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
