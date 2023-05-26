import React from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = ({ getOneProduct, oneProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div className="container">
      {oneProduct ? (
        <div>
          <div>{oneProduct.title}</div>
          <div>{oneProduct.price}</div>
          <img src={oneProduct.image} alt="" />
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Details;
