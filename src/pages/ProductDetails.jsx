import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import styles from "./ProductDetails.module.css"

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
   
    <div className={styles.detailContainer}>
      <div>
        <img src={product.image} alt={product.name}/>
      </div>
      <div className={styles.detailInfo}>
        <h1>{product.name}</h1>
        <p>{product.details.brand}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>

        <div>
          <p>
            {product.details.battery}
            {product.details.bluetooth}
            {product.details.weight}
            {product.details.audio}
            {product.details.extra}
          </p>
        </div>
        <button onClick={() => addToCart(product.id)}>Add to cart {productQuantityLabel}</button>

        <div>
          {product.shipping.warranty} 
          {product.shipping.freeShipping}
        </div>
      </div>
    </div>
    
  )
  
}


