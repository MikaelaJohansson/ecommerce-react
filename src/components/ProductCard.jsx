import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from "./ProductCard.module.css"
import { LuShoppingCart, } from "react-icons/lu";


export default function ProductCard({product}) {

  const {addToCart, cartItems} = useCart()
  const productInCart = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

 

  return (
    <div className={styles.ProductCardMainContainer}>

      <Link to={`/products/${product.id}`}>
        <img src = {product.image} alt={product.name} width={300}/>
      </Link>

     

      <div className={styles.productCardContent}>

        <h3>{product.name}</h3>
        <p>${product.price}</p>

        <div>
          <button className={styles.productCardButtonsDetailView}><Link to={`/products/${product.id}`}>View Details</Link></button>
          <button className={styles.productCardButtonsAddToCart} onClick={() => addToCart(product.id)}> <LuShoppingCart className={styles.productInCartIcon} />Add to Cart {productQuantityLabel} </button>
        </div>

      </div>           

    </div>
  )
}
