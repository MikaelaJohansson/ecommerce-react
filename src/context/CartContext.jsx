import { createContext, useContext, useState, useEffect } from 'react'
import {getProductById} from "../data/products"

// Creates a global cart context
const CartContext = createContext(null);

export default function CartProvider({ children }) {

    // Initializes cart state from localStorage to persist cart items after refresh
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems")
        return savedCart ? JSON.parse(savedCart) : []
    }) //{id:2, quantity:7}

    // Saves cart changes to localStorage whenever cartItems updates
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    // Adds a product to the cart or increases quantity if it already exists
    function addToCart(productId){

        const existing = cartItems.find((item) => item.id === productId)
        if(existing){
            const currentQuantity = existing.quantity
            const updatedCartItems = cartItems.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity + 1} : item);
            setCartItems(updatedCartItems);
        }else{
            setCartItems([...cartItems, ({id:productId, quantity:1})]);
        }
        
    }

    // Combines cart item data with full product details
    function getCartItemsWithProducts(){
        return cartItems.map(item => ({
            ...item,
            product: getProductById(item.id)
        })).filter(item => item.product);
    }

    // Removes a product from the cart
    function removeFromCart(productId){
        setCartItems(cartItems.filter((item => item.id !== productId)))
    }

    // Updates product quantity or removes the item if quantity reaches zero
    function updateQuantity(productId, quantity){

        if(quantity <= 0){
            removeFromCart(productId)
            return;
        }

        setCartItems(
            cartItems.map((item) =>
                item.id === productId ? {...item, quantity} : item
            )           
        );

    }
    
    // Calculates the total cart price based on product price and quantity
    function getCartTotal(){
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        },0);

        return total;
    }

    // Removes all items from the cart
    function clearCart(){
        setCartItems([])
    }

   {/* Exposes cart state and cart actions to all child components */}
  return (
    <CartContext.Provider value = {{cartItems, addToCart, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, clearCart}}>
        {children}
    </CartContext.Provider>
  )

}

// Custom hook to access cart context
export function useCart(){
    const context = useContext(CartContext);
    return context
}