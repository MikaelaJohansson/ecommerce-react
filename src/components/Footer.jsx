import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footerMainContainer}>
        
      <div className={`${styles.footerContent}
        flex flex-col items-center text-center gap-8
        md:flex-row md:items-start md:justify-between md:text-left`}>

        <div className="flex flex-col items-center md:items-start">

          <img className={styles.footerLogo}
            src={logo}
            alt="ElectroShop logo"
            loading="lazy"
          />

          <div className={`${styles.footerIcons} justify-center md:justify-start`}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <MdEmail />
          </div>

        </div>

        <div className={styles.footerContainerContent}>
          <strong><h4>Shop</h4></strong>
          <p>Products</p>
          <p>Categories</p>
          <p>New arrivals</p>
        </div>

        <div className={styles.footerContainerContent}>
         <strong> <h4>Company</h4></strong>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div className={styles.footerContainerContent}>
          <strong><h4>Support</h4></strong>
          <p>Help Center</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>

      </div>
    </footer>
  );
}