import { Link } from 'react-router-dom'
import { getProducts } from '../data/products'
import React from 'react'
import smartwatch from '../assets/smartwatch.png'
import ProductCard from '../components/ProductCard'
import styles from './Home.module.css'
import ReviewSlider from '../components/ReviewSlider'

export default function Home() {

  // Retrieves all products from the mock data source
  const products = getProducts()


  return (
    <main className={styles.homeMainContainer}>
          
      <section className={styles.HomeHeroSection}>
        <img 
          className={styles.HomeHeroImg} 
          src={smartwatch} 
          alt="Smartwatch" 
        /> 

        {/* Hero section displaying featured content and promotional information */}
        <div className={styles.HomeHeroSectionInfo}>

          <p className={styles.eyebrow}>New arrivals in tech</p>
          <h1>Welcome to ElectroShop</h1>
          <p>
            Smart electronics for modern everyday life.
          </p>
          <p>
            Discover carefully selected smartwatches, audio devices, accessories, and tech essentials designed for performance, style, and reliability.
          </p>
          <br />
          <br />

          <section>
            <p><strong className={styles.HomeHeroSectionInfoSale}>Sale This Week</strong></p>
            <p>Save up to <strong className={styles.HomeHeroSectionInfoProcent}>40% </strong>on selected products</p>
          </section>

          <br />
        </div>           
      </section>

      {/* Renders a list of product cards */}
      <section className={styles.HomeProductsSection}>
        <div className={styles.HomeProducts}>
          <h2 className={styles.HomeProductsHead}>Products</h2>

          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>           
          ))}
        </div>
      </section>

      {/* Displays customer reviews in a slider */}    
      <section className={styles.HomeProductsOffer}>
        <ReviewSlider></ReviewSlider>
      </section>

    </main>
  )
}
