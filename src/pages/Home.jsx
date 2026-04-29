import { getProducts } from "../data/products";
import React from "react";
import smartwatch from "../assets/smartwatch.png";
import ProductCard from "../components/ProductCard";
import styles from "./Home.module.css";
import ReviewSlider from "../components/ReviewSlider";

export default function Home() {

  // Retrieves all products from the mock data source
  const products = getProducts();

  return (
    <main className={styles.homeMainContainer}>
      
      {/* Hero section displaying featured content and promotional information */}
      <section
        className={`
          ${styles.HomeHeroSection}
          flex flex-col-reverse text-center
          px-6 py-10 gap-8
          md:flex-row-reverse md:text-left md:px-12 md:py-14
          lg:px-20 lg:py-16 lg:gap-12
        `}
      >

        <img
          className={`
            ${styles.HomeHeroImg}
            w-[230px]
            sm:w-[280px]
            md:w-[340px]
            lg:w-[400px]
          `}
          src={smartwatch}
          alt="Smartwatch"
        />

        <div
          className={`
            ${styles.HomeHeroSectionInfo}
            max-w-sm
            md:max-w-[500px]
          `}
        >
          <p className={styles.eyebrow}>New arrivals in tech</p>

          <h1
            className="
              text-[30px]
              sm:text-[34px]
              md:text-[40px]
            "
          >
            Welcome to ElectroShop
          </h1>

          <p>Smart electronics for modern everyday life.</p>

          <p>
            Discover carefully selected smartwatches, audio devices,
            accessories, and tech essentials designed for performance, style,
            and reliability.
          </p>

          {/* Sale promotion section */}
          <section className="mt-8">
            <p>
              <strong className={styles.HomeHeroSectionInfoSale}>
                Sale This Week
              </strong>
            </p>

            <p>
              Save up to{" "}
              <strong className={styles.HomeHeroSectionInfoProcent}>
                40%
              </strong>{" "}
              on selected products
            </p>
          </section>

        </div>
      </section>

      {/* Renders a list of product cards */}
      <section
        className={`
          ${styles.HomeProductsSection}
          px-5 py-12
          md:px-10 md:py-16
          lg:px-10 lg:py-20
        `}
      >
        <div
          className={`
            ${styles.HomeProducts}
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
              md:gap-8
              pl-1 md:pl-2
          `}
        >
          <h2
            className={`
              ${styles.HomeProductsHead}
              col-span-full
              text-center
              md:text-left
            `}
          >
            Products
          </h2>

          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      {/* Displays customer reviews in a slider */}
      <section
        className={`
          ${styles.HomeProductsOffer}
          px-5 py-12
          md:px-10 md:py-16
        `}
      >
        <ReviewSlider />
      </section>

    </main>
  );
}