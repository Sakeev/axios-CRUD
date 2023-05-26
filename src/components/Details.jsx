import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = ({ getOneProduct, oneProduct }) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOneProduct(id);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const styles = { width: "200px" };

  return (
    <div className="container">
      {!loading ? (
        <div>
          <h2>{oneProduct.title}</h2>
          <h4>{oneProduct.price}</h4>
          <img src={oneProduct.image} alt="" style={styles} />
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
