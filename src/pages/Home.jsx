import { Link } from 'react-router-dom'
import { getProducts } from '../data/products'
import React from 'react'
import smartwatch from '../assets/smartwatch.png'
import ProductCard from '../components/ProductCard'
import styles from './Home.module.css'
import ReviewSlider from '../components/ReviewSlider'

export default function Home() {

  const products = getProducts()
  


  return (
    <div className={styles.homeMainContainer}>
          
      <div className={styles.HomeHeroSection}>

        <img 
          className={styles.HomeHeroImg} 
          src={smartwatch} 
          alt="Smartwatch" 
        /> 

        <div className={styles.HomeHeroSectionInfo}>
          <h1>Welcome to ShopHub</h1>
          <p>
            At ElectroShop, we bring you the latest in modern technology with a focus on quality, performance, and design. 
            From smartwatches and audio devices to everyday tech essentials, our products are carefully selected to give you 
            the best experience at competitive prices. Discover reliable electronics built to fit your lifestyle.
          </p>
        </div>
            
      </div>

      <div className={styles.HomeProductsSection}>
        <h2 className={styles.HomeProductsHead}>Products</h2>
        <div className={styles.HomeProducts}>
          
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>           
          ))}
        </div>
      </div>

      <div className={styles.HomeProductsOffer}>
          <ReviewSlider></ReviewSlider>
      </div>

    </div>
  )
}
