import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import Details from "./components/Details";
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { API } from "./helpers/consts";

const App = () => {
  // ! CRUD - create, read, update, delete

  // ! для хранения полученных продуктов
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  // ! create (post request)
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //  ! read (get request)
  async function getProducts() {
    let result = await axios.get(API);
    setProducts(result.data);
  }

  // ! get for details && get for edit
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  // ! update (patch request)
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  // ! delete (delete request)
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              getProducts={getProducts}
              products={products}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route
          path="/edit/:id"
          element={
            <EditForm
              getOneProduct={getOneProduct}
              oneProduct={oneProduct}
              updateProduct={updateProduct}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details getOneProduct={getOneProduct} oneProduct={oneProduct} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
