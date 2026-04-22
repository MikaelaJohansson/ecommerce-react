import styles from "./Checkout.module.css"
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'

export default function Checkout() {

  const navigate = useNavigate();
  const { getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal()

  function placeOrder(){
    alert("Successful order!")
    clearCart();
  }

  return (
    <div>
      <div className={styles.CheckoutMain}>
        <h1>Shopping Cart</h1>
        <div className={styles.CheckoutContainer}>

          <div >
            {cartItems.map((item) => (
              <div key={item.id} className={styles.CheckoutProductsInCart}>
                
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

                  <div className={styles.QuantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <button className={styles.CheckoutButtonRemove} onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.checkoutPayContainer}>
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
          </div>

          <div className={styles.checkoutButtonCheckoutContainer}>

            <button className={styles.checkoutButtonContinueShopping} onClick={( () => navigate("/"))}>Continue Shopping</button>

            <button className={styles.checkoutButtonPlaceOreder} onClick={placeOrder}>
              Place order
            </button>

            <br />
          </div>

        </div>
      </div>
    </div>
  );
}