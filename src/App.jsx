import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          {/* Imports the Navbar component */}
          <Navbar />  
          <main className="mainContent">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/auth" element={<Auth/>} />

              <Route path="/checkout" element={
              <ProtectedRoute>
                {/* Protects the cart route – only accessible for logged-in users */}
                <Checkout />
              </ProtectedRoute>} />

              <Route path="/products/:id" element={<ProductDetails />}/>
            </Routes>
          </main>
          {/* Imports the Footer component */}
          <Footer />
        </div>
      </CartProvider>
   </AuthProvider>
  );
}

export default App;
