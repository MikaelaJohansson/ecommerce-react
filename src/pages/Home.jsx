import React from 'react'
import { getProducts } from '../data/products'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

export default function Home() {

  const products = getProducts()

  return (
    <div>

      <div className='herosection'>
        <h1>Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className='container'>
        <h2>our products</h2>

        <div className='products-grid'>
          {products.map((product) => (
           <ProductCard product = {product} key={product.id}/>           
          ))}
        </div>

      </div>
    </div>
  )
}
