import { useCart } from '../context/CartContext';

export default function Checkout() {

  const { getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal()

  function placeOrder(){
    alert("Successful order!")
    clearCart();
  }

  return (
    <div>
      <div>
        <h1>Checkout</h1>
        <div>
          <div>

            <h2>Order summary</h2>

            {cartItems.map((item) => (
              <div key={item.id}>

                <img src={item.product.image} alt={item.product.name} />

                <div>
                  <h3>{item.product.name}</h3>
                  <p>${item.product.price} each </p>
                </div>

                <div>
                  <div>
                    <button onClick={() => updateQuantity(item.id, item.quantity -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity +1)}>+</button>
                  </div>

                  <p>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>

                  <button onClick={() => removeFromCart(item.id)}>Remove</button>

                </div>

              </div>
            ))}

          </div>
          <div>
            <h2>Total</h2>
            <div>
              <p>Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div>
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button onClick={placeOrder}>
              Place order
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}