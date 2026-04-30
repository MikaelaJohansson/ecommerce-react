import styles from "./Checkout.module.css"
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'

export default function Checkout() {

  const navigate = useNavigate();
  const { getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  // Retrieves cart items with full product data from context
  const cartItems = getCartItemsWithProducts();

  // Calculates the total price of all items in the cart
  const total = getCartTotal()

  // Handles order placement by clearing the cart and showing confirmation
  function placeOrder(){
    alert("Successful order!")
    clearCart();
  }

  return (
    <main className={styles.CheckoutMainContainer}>
      <div className={` ${styles.CheckoutContainer}
        px-4
        md:px-8 `}>

        <h1>Shopping Cart</h1>

        {/* Renders all items currently in the shopping cart */}
        <section>
          {/* Each cart item displays product info, quantity controls, and actions */}
          {cartItems.map((item) => (
            <article
              key={item.id}
              className={`
                ${styles.CheckoutProductsInCart}
                grid-cols-1 text-center gap-4 p-4
                md:grid-cols-[160px_1fr_240px] md:text-left md:gap-0
              `} >
              
              <img
                className={`
                  ${styles.CheckoutImage}
                  mx-auto
                  md:mx-0
                `}
                src={item.product.image}
                alt={item.product.name}
                loading="lazy"
              />

              <div className={styles.CheckoutProductName}>
                <h3>{item.product.name}</h3>
                <p>${item.product.price} each</p>
              </div>

              <div className={` ${styles.CheckoutActions}
                flex-col items-center gap-3
                md:flex-row md:items-center md:gap-5 `} >

                <p>${(item.product.price * item.quantity).toFixed(2)}</p>

                {/* Allows users to increase or decrease product quantity */}
                <div className={styles.QuantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <button className={styles.CheckoutButtonRemove} onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>

            </article>
          ))}
        </section>

        {/* Displays order summary including subtotal, shipping, and total */}
        <section className={` ${styles.checkoutPayContainer}
          items-center mr-0
          md:items-end md:mr-10 `} >

          <div className={styles.checkoutSummary}>

            <div className={styles.checkoutRow}>
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <div className={styles.checkoutRowShipping}>
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className={styles.checkoutRow}>
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

        </section>

        {/* Navigation and order actions */}
        <div className={` ${styles.checkoutButtonCheckoutContainer}
          flex-col items-center gap-3 px-0
          md:flex-row md:gap-8 md:px-10 `} >

          <button className={` ${styles.checkoutButtonContinueShopping}
            w-full max-w-[280px] text-sm px-4 py-2
            md:max-w-[400px] md:text-base
            `}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>

          <button className={` ${styles.checkoutButtonPlaceOreder}
              w-full max-w-[280px] text-sm px-4 py-2
              md:max-w-[400px] md:text-base
            `}
            onClick={placeOrder}
          >
            Place order
          </button>

          <br />
        </div>

      </div>
    </main>
  );
}