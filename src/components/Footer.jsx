import React from 'react'
import styles from "./Footer.module.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className={styles.footerMainContainer}>
        <div className={styles.footerContent}>
            <div>
                <img className={styles.footerLogo} src={logo}  alt="Logo" width={150} />              
                <div className={styles.footerIcons}>
                     <FaFacebookF />
                     <FaInstagram />
                     <FaTwitter />
                     <MdEmail />
                </div>
                
            </div>

            <div>
                <h4>Shop</h4>
                <p>Products</p>
                <p>Categories</p>
                <p>New arrivals</p>
            </div>

            <div>
                <h4>Company</h4>
                <p>About</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>

            <div>
                <h4>Support</h4>
                <p>Help Center</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
    </div>
  )
}
