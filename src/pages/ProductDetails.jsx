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

  // Fetches the product based on the URL id.
  // Redirects to home if the product does not exist.
  useEffect(() => {

    const foundProduct = getProductById(id);

    if(!foundProduct){
      navigate("/");
      return;
    }

    setProduct(foundProduct);

  },[id, navigate]);


  if(!product){
    return <h1>Loading...</h1>
  }

  const productInCart = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
   
    <main className={styles.detailMainContainer}>

      <article className={styles.detailContainer}>

        {/* Displays the main product information including image, name, price, and description */}
        <section className={styles.detailContainerHero}>
          <div>
            <img src={product.image} alt={product.name} width={400}/>
          </div>

          <div  className={styles.detailTexContent}>

            <p className={styles.detailTexContentNew}>New!</p>

            <h1>{product.name}</h1>

            <p className={styles.detailTexContentDetails}>
              <em>{product.details.brand}</em> <br /> 
              <strong className={styles.detailTexContentPrice}>${product.price}</strong> <br /> <br />
              {product.description}
            </p>

          </div>
        </section>
       
        {/* Displays key product features such as battery, bluetooth, and audio */}
        <div className={styles.detailAllContentContainer}>

          <section className={styles.productFeatures}>
            <div className={styles.productFeatureItem}>
              <LuBatteryFull className={styles.productFeatureIcon} />
              <span>{product.details.battery}</span>
            </div>

            <div className={styles.productFeatureItem}>
              <FaBluetoothB className={styles.productFeatureIcon} />
              <span>{product.details.bluetooth}</span>
            </div>

            <div className={styles.productFeatureItem}>
              <LuVolume2 className={styles.productFeatureIcon} />
              <span>{product.details.audio}</span>
            </div>

            <div className={styles.productFeatureItem}>
              <span className={styles.productFeatureIconPlaceholder}></span>
              <span>{product.details.extra}</span>
            </div>
          </section>

          {/* Action buttons for adding the product to cart and navigating to checkout */}
          <section  className={styles.detailTextContainerButton}>
            <button  className={styles.detailTextContainerButtonAdd}  onClick={() => addToCart(product.id)}><LuShoppingCart /> Add to cart {productQuantityLabel}</button>
            <button  className={styles.detailTextContainerButtonCart} onClick={() => navigate("/checkout")}>View cart</button>
          </section>

          <div className={styles.detailTextbottomWarranty}>

            <div className={styles.warrantyRow}>
              <LuShieldCheck size={24} color="rgb(59, 102, 181)" />
              <span>{product.shipping.warranty}</span>
            </div>

            <div className={styles.warrantyRow}>
              <LuTruck size={24} color="rgb(59, 102, 181)" />
              <span>{product.shipping.freeShipping}</span>
            </div>

            <div className={styles.warrantyRow}>
              <FiShoppingBag size={24} color="rgb(59, 102, 181)" />
              <span>30-day return policy</span>
            </div>

            <div className={styles.warrantyRow}>
              <FiUsers size={24} color="rgb(59, 102, 181)" />
              <span>50-day return policy for members</span>
            </div>

          </div>

          {/* Displays fake shipping information, warranty, and return policies */}
          <section  className={styles.detailTextbottomLoan}>
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
            <h2><strong>⚠️ Credit warning</strong></h2>
            <p>
              Borrowing costs money! If you are unable to repay your debt on time,
              you risk receiving a payment default notice. This may lead to difficulties
              renting housing, signing subscriptions, and obtaining new loans.
              For support, contact your municipality’s budget and debt counseling service.
            </p>
          </section>

        </div>
      </article>
    </main>
  )
}


