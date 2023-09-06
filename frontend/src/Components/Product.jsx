import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <card className="my-3 p3 rounded">
        <Link to={`/products/${product._id}`} >
            <Card.Img src={product.image}  variant="top"/>
        </Link>
        <Card.Body>
            <Link to={`/products/${product._id}`} >
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </card>
  )
}

export default Product