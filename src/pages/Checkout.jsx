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
      <div className={styles.CheckoutContainer}>
        <h1>Shopping Cart</h1>
        {/* Renders all items currently in the shopping cart */}
        <section>
          {/* Each cart item displays product info, quantity controls, and actions */}
          {cartItems.map((item) => (
            <article key={item.id} className={styles.CheckoutProductsInCart}>
              
              <img
                className={styles.CheckoutImage}
                src={item.product.image}
                alt={item.product.name}
              />

              <div className={styles.CheckoutProductName}>
                <h3>{item.product.name}</h3>
                <p>${item.product.price} each</p>
              </div>

              <div className={styles.CheckoutActions}>
                <p>${(item.product.price * item.quantity).toFixed(2)}</p>

                {/* Allows users to increase or decrease product quantity */}
                <div className={styles.QuantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <button className={styles.CheckoutButtonRemove} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </article>
          ))}
        </section>

        {/* Displays order summary including subtotal, shipping, and total */}
        <section className={styles.checkoutPayContainer}>
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
        <div className={styles.checkoutButtonCheckoutContainer}>

          <button className={styles.checkoutButtonContinueShopping} onClick={( () => navigate("/"))}>Continue Shopping</button>

          <button className={styles.checkoutButtonPlaceOreder} onClick={placeOrder}>
            Place order
          </button>

          <br />
        </div>

      </div>
    </main>
  );
}