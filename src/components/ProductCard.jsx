import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from "./ProductCard.module.css"
import { LuShoppingCart, } from "react-icons/lu";


export default function ProductCard({product}) {

  // Retrieves cart state and actions from context
  const {addToCart, cartItems} = useCart()

  // Checks if the current product already exists in the cart
  const productInCart = cartItems.find((item) => item.id === product.id)

  // Displays the quantity of the product if it exists in the cart
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

 

  return (
    <article className={styles.ProductCardMainContainer}>

      <Link to={`/products/${product.id}`}>
        <img src = {product.image} alt={product.name} width={250}/>
      </Link>

     
      {/* Displays product name, price, and action buttons */}
      <div className={styles.productCardContent}>

        <h3>{product.name}</h3>
        <p>${product.price}</p>

        {/* Provides navigation to product details and adds the product to the cart */}
        <div className={styles.productCardButtons}>
          <Link className={styles.productCardButtonsDetailView} to={`/products/${product.id}`}>
            View Details
          </Link>
          <button className={styles.productCardButtonsAddToCart} onClick={() => addToCart(product.id)}> <LuShoppingCart className={styles.productInCartIcon} />Add to Cart {productQuantityLabel} </button>
        </div>

      </div>           

    </article>
  )
}
