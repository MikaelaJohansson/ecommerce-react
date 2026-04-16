import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src = {product.image} alt={product.name}/>
        <div className='prduct-card-content'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div>
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button>Add to Cart</button>
        </div>
        </div>             
    </div>
  )
}
