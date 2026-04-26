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
          <p className={styles.eyebrow}>New arrivals in tech</p>

          <h1>Welcome to ElectroShop</h1>

          <p className={styles.tagline}>
            Smart electronics for modern everyday life.
          </p>

          <p className={styles.description}>
            Discover carefully selected smartwatches, audio devices, accessories, and tech essentials designed for performance, style, and reliability.
          </p>
          <br />
          <div className={styles.highlightBox}>
            <p><strong>Summer Sale</strong></p>
            <p>Up to 40% off selected products</p>
          </div>
          <br />
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
