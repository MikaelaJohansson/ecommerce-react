import styles from "./ProductDetails.module.css";
import ProductCard from '../components/ProductCard';
import Checkout from "../pages/Checkout";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
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
   
    <div className={styles.detailMainContainer}>
      <div className={styles.detailContainer}>

        <div>
          <img src={product.image} alt={product.name}/>
        </div>

        <div className={styles.detailAllContentContainer}>

          <p className={styles.detailTexContentNew}>New!</p>

          <h1>{product.name}</h1>

          <p>
            <em>{product.details.brand}</em> <br /> 
            <strong className={styles.detailTexContentPrice}>${product.price}</strong> <br /> <br />
            {product.description}
          </p>

          <div className={styles.detailTextBottomMidSectionContainer}>

            <div className={styles.detailTextBottomMidSection}>
              <LuBatteryFull size={32} />
              <div className={styles.detailTextBottomMidSection}>
                {product.details.battery} 
              </div>
              <FaBluetoothB size={20}  />
              <div className={styles.detailTextBottomMidSection}>
                {product.details.bluetooth}
              </div>
              <LuVolume2 size={32} /> 
              <div className={styles.detailTextBottomMidSection}>
                {product.details.audio}
              </div>
              <div className={styles.detailTextBottomMidSection}>
                {product.details.extra}
              </div>
            </div>

          </div>

          <span  className={styles.detailTextContainerButton}>
            <button  className={styles.detailTextContainerButtonAdd}  onClick={() => addToCart(product.id)}><LuShoppingCart /> Add to cart {productQuantityLabel}</button>
            <button  className={styles.detailTextContainerButtonCart} onClick={() => navigate("/checkout")}>View cart</button>
          </span>

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


