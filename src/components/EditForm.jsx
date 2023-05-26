import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditForm = ({ getOneProduct, oneProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  console.log(oneProduct);

  function handleValues() {
    let newProduct = {
      title,
      price,
      image,
    };
    console.log(newProduct);
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <Link to="/">
        <button onClick={handleValues}>Save</button>
      </Link>
    </div>
  );
};

export default EditForm;
