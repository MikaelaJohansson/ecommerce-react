import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({product}) {

  const {addToCart, cartItems} = useCart()
  const productInCart = cartItems.find((item) => item.id === product.id)
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div className='product-card'>
        <img src = {product.image} alt={product.name}/>
        <div className='product-card-content'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div>
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product.id)}>Add to Cart {productQuantityLabel} </button>
        </div>
        </div>             
    </div>
  )
}
