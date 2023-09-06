import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <card className="my-3 p3 rounded">
        <a href={`/products/${product._id}`} >
            <Card.Img src={product.image}  variant="top"/>
        </a>
        <Card.Body>
            <a href={`/products/${product._id}`} >
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </card>
  )
}

export default Product