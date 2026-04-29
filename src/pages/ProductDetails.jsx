import styles from "./ProductDetails.module.css";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { FaBluetoothB } from "react-icons/fa";
import { LuBatteryFull, LuVolume2, LuShoppingCart, LuShieldCheck, LuTruck } from "react-icons/lu";
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

      <article
        className={`
          ${styles.detailContainer}
          w-full max-w-[900px]
          mx-4 my-10
          md:my-20
        `}
      >

        {/* Displays the main product information including image, name, price, and description */}
        <section
          className={`
            ${styles.detailContainerHero}
            flex flex-col items-center text-center gap-8
            md:flex-row md:text-left md:items-start
          `}
        >
          <div>
            <img
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px]"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div
            className={`
              ${styles.detailTexContent}
              mx-0 md:mx-8
            `}
          >

            <p className={styles.detailTexContentNew}>New!</p>

            <h1 className="text-[28px] sm:text-[32px] md:text-[35px]">
              {product.name}
            </h1>

            <p className={styles.detailTexContentDetails}>
              <em>{product.details.brand}</em> <br /> 
              <strong className={styles.detailTexContentPrice}>${product.price}</strong> <br /> <br />
              {product.description}
            </p>

          </div>
        </section>
       
        {/* Displays key product features such as battery, bluetooth, and audio */}
        <div className={styles.detailAllContentContainer}>

          <section
            className={`
              ${styles.productFeatures}
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              text-center
              justify-items-center
            `}
          >
            <div className={`${styles.productFeatureItem} justify-center`}>
              <LuBatteryFull className={styles.productFeatureIcon} />
              <span>{product.details.battery}</span>
            </div>

            <div className={`${styles.productFeatureItem} justify-center`}>
              <FaBluetoothB className={styles.productFeatureIcon} />
              <span>{product.details.bluetooth}</span>
            </div>

            <div className={`${styles.productFeatureItem} justify-center`}>
              <LuVolume2 className={styles.productFeatureIcon} />
              <span>{product.details.audio}</span>
            </div>

            <div className={`${styles.productFeatureItem} justify-center`}>
              <span className={styles.productFeatureIconPlaceholder}></span>
              <span>{product.details.extra}</span>
            </div>
          </section>

          {/* Action buttons for adding the product to cart and navigating to checkout */}
          {/* Action buttons for adding the product to cart and navigating to checkout */}
          <section
            className={`
              ${styles.detailTextContainerButton}
              flex-col items-center gap-3
              md:flex-row md:justify-center md:gap-4
            `}
          >
            <button
              className={`
                ${styles.detailTextContainerButtonAdd}
                w-[240px]
                text-sm px-4 py-2
                md:w-[320px] md:text-base md:px-6 md:py-3
              `}
              onClick={() => addToCart(product.id)}
            >
              <LuShoppingCart /> Add to cart {productQuantityLabel}
            </button>

            <button
              className={`
                ${styles.detailTextContainerButtonCart}
                w-[240px]
                text-sm px-4 py-2
                md:w-[320px] md:text-base md:px-6 md:py-3
              `}
              onClick={() => navigate("/checkout")}
            >
              View cart
            </button>
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
          <section className={styles.detailTextbottomLoan}>
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