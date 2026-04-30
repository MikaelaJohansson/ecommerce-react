import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";
import { LuShoppingCart } from "react-icons/lu";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <article className={` ${styles.ProductCardMainContainer}
      w-full max-w-[320px] mx-auto
      `}>

      <Link to={`/products/${product.id}`}>
        <img
        className="w-full h-[260px] object-cover"
        src={product.image}
        alt={product.name}
        loading="lazy"
        />
      </Link>

      <div className={styles.productCardContent}>

        <h3>{product.name}</h3>
        <p>${product.price}</p>

        <div
          className={`
            ${styles.productCardButtons}
            flex-col gap-3 px-3 
            sm:flex-row sm:gap-2
          `}>

          <Link className={` ${styles.productCardButtonsDetailView}
              w-full sm:w-auto md:w-36 
              whitespace-nowrap
            `}
            to={`/products/${product.id}`}
          >
            View Details
          </Link>

          <button className={` ${styles.productCardButtonsAddToCart}
              w-full sm:w-auto md:w-36 
              whitespace-nowrap
            `}
            onClick={() => addToCart(product.id)}
          >
            <LuShoppingCart className={styles.productInCartIcon} />
            Add to Cart {productQuantityLabel}
          </button>

        </div>
        
      </div>
    </article>
  );
}