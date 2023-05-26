import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = ({ getProducts, products, deleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [hover, setHover] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-between mt-5">
      {products.map((item) => (
        <Card
          key={item.id}
          onClick={() => setSelectedProduct(item.id)}
          onMouseEnter={() => setHover(item.id)}
          onMouseLeave={() => setHover("")}
          style={{
            width: "18rem",
            border: selectedProduct === item.id ? "1px solid black" : "",
            backgroundColor: hover === item.id ? "grey" : "white",
          }}
        >
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Link to={"/details/" + item.id}>
              <Button variant="success">Details</Button>
            </Link>
            <Link to={`/edit/${item.id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="danger" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
