import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import styles from "./ProductDetails.module.css";
import { FaBluetoothB, } from "react-icons/fa";
import { LuBatteryFull,LuVolume2,LuShoppingCart, LuShieldCheck,LuTruck } from "react-icons/lu";

export default function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState(null)
  const navigate = useNavigate();

  const {addToCart, cartItems} = useCart()
 

  useEffect(() => {

    const foundProduct = getProductById(id);

    if(!foundProduct){
      navigate("/");
      return;
    }

    setProduct(foundProduct);

  },[id]);


  if(!product){
    return <h1>Loading...</h1>
  }

  const productInCart = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
   
    <div className={styles.detailMain}>
      <div className={styles.detailContainer}>

          <div>
            <img src={product.image} alt={product.name}/>
          </div>

          <div className={styles.detailTextContainer}>
            <p className={styles.detailTextNew}>New!</p>

            <h1>{product.name}</h1>

            <p className={styles.detailTextTop}>
              <em>{product.details.brand}</em> <br /> 
              <strong className={styles.detailTextTopPrice}>${product.price}</strong> <br /> <br />
              {product.description}
            </p>

            <div className={styles.detailTextbottom}>
              <div className={styles.detailTextbottomContainer}>
                <LuBatteryFull />
                <div className={styles.detailTextbottomContant}>
                  {product.details.battery} 
                </div>
                <FaBluetoothB />
                <div className={styles.detailTextbottomContant}>
                  {product.details.bluetooth}
                </div>
                <LuVolume2 /> 
                <div className={styles.detailTextbottomContant}>
                  {product.details.audio}
                </div>
                <div className={styles.detailTextbottomContant}>
                  {product.details.extra}
                </div>
              </div>
            </div>
            
            <button  onClick={() => addToCart(product.id)}><LuShoppingCart /> Add to cart {productQuantityLabel}</button>

            <div className={styles.detailTextbottomWarranty}>
               <LuShieldCheck />
              <div className={styles.detailTextbottomWarrantyDiv}>              
                {product.shipping.warranty} 
              </div> 
              <LuTruck />
              {product.shipping.freeShipping}
            </div>

        </div>

      </div>
    </div>
    
  )
  
}


