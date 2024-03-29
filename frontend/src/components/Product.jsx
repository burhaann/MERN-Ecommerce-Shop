import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Message from "./Message";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          {product.reviews.length === 0 ? (
            <Message variant="secondary">No Reviews</Message>
          ) : (
            <Rating
              value={product.rating}
              text={`${product.numReviews} ${
                product.numReviews === 1 ? "review" : "reviews"
              }`}
            />
          )}
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
