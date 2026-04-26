import styles from "./ProductDetails.module.css";
import ProductCard from '../components/ProductCard';
import Checkout from "../pages/Checkout";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { FaBluetoothB, } from "react-icons/fa";
import { LuBatteryFull,LuVolume2,LuShoppingCart, LuShieldCheck,LuTruck } from "react-icons/lu";
import { FiShoppingBag, FiUsers } from "react-icons/fi";

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

        <div className={styles.detailContainerHero}>

          <div>
            <img src={product.image} alt={product.name} width={320}/>
          </div>

          <div  className={styles.detailTexContent}>

            <p className={styles.detailTexContentNew}>New!</p>

            <h1>{product.name}</h1>

            <p>
              <em>{product.details.brand}</em> <br /> 
              <strong>${product.price}</strong> <br /> <br />
              {product.description}
            </p>

          </div>

        </div>

       

        <div className={styles.detailAllContentContainer}>

         

          

          <div className={styles.detailTextBottomMidSectionContainer}>

            <div className={styles.detailTextBottomMidSection}>
              
              <div className={styles.detailTextBottomMidSection}>
                <LuBatteryFull size={32} color="rgb(59, 102, 181)" />{product.details.battery} 
              </div>
           
              <div className={styles.detailTextBottomMidSection}>
                  <FaBluetoothB size={24} color="rgb(59, 102, 181)" /> {product.details.bluetooth}
              </div>
              
              <div className={styles.detailTextBottomMidSection}>
                <LuVolume2 size={32} color="rgb(59, 102, 181)" /> {product.details.audio}
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
              
            <div className={styles.detailTextbottomWarrantyDiv}>              
             <LuShieldCheck size={24} color="rgb(59, 102, 181)" />  {product.shipping.warranty} 
            </div> 

            <div>
              <LuTruck size={24} color="rgb(59, 102, 181)" />  {product.shipping.freeShipping}
            </div>

             <div>
              <p> <FiShoppingBag size={24} color="rgb(59, 102, 181)" /> 30-day return policy</p>
            </div>

            <div>
              <p> <FiUsers size={24} color="rgb(59, 102, 181)" />  50-day return policy for members</p>
            </div>
          
          </div>

          <div  className={styles.detailTextbottomLoan}>
            <h2>Buy now, pay later</h2>
            <br />
            <p><strong>789 SEK/month for 12 months</strong></p>

            <p>
              Pay later or split your purchase into multiple payments. Shop today and choose the option that suits you best!
            </p>
            <br />
            <p><strong>Interest</strong><br />0.00%</p>

            <p><strong>Administration fee</strong><br />39 SEK</p>

            <p><strong>Setup fee</strong><br />395 SEK</p>

            <p><strong>Effective interest rate</strong><br />19.45%</p>

            <p><strong>Total amount to repay</strong><br />9,858 SEK</p>
            <br />
            <p>
              <strong>Representative example:</strong><br />
              For a purchase of 10,000 SEK, 12 payments, setup fee 395 SEK, administration fee 39 SEK/month,
              interest 0%, effective interest rate 17.33%, monthly payment 872 SEK,
              total to pay 10,863 SEK.
              If campaign terms are not met, a variable interest rate (currently 20.95%)
              and administration fee of 39 SEK/month will apply.
              Credit provider: Avida.
            </p>
            <br />
            <p><strong><h2>⚠️ Credit warning</h2></strong></p>
            <p>
              Borrowing costs money! If you are unable to repay your debt on time,
              you risk receiving a payment default notice. This may lead to difficulties
              renting housing, signing subscriptions, and obtaining new loans.
              For support, contact your municipality’s budget and debt counseling service.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}


