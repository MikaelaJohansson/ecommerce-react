import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from "./Navbar.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Navbar() {

  // Retrieves the current user and logout function from auth context
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Checks if the user is currently on the auth page
  const isAuthPage = location.pathname === "/auth";

  // Logs the user out and redirects to the auth page
  function handleLogout() {
    logout();
    navigate("/auth");
  }

  {/* Shows a simplified navbar on the auth page, no links */}
  if (isAuthPage){
    return(
      <nav className={styles.navbarMainContainer}>
        <div className="flex items-center justify-center md:justify-start">
          <Link to={"/"}>
            <img src={logo} alt="ElectroShop logo" width={200} loading='lazy'/>
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.navbarMainContainer}>

      <div className={` ${styles.navbarContainer}
        flex-col gap-5
        md:flex-row md:gap-0 `}>

        <Link className={styles.navbarLinkHome} to="/">
          <img src={logo} alt="ElectroShop logo" width={200} loading='lazy'/>
        </Link>

        <div className={`${styles.navbarLinks} flex justify-center`}>
          <Link to="/"> <FaHome /> Home</Link>
          <Link to="/checkout"> <FaShoppingCart /> Cart</Link>
        </div>

        <div>
          { !user ? 
            <div className={`${styles.navbarLinks} flex justify-center`}>
              <Link to="/auth">Login</Link> 
              <Link to="/auth">Signup</Link>
            </div> : (
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-2">
              <span className="flex items-center gap-1">
                <FaUser /> Hello, {user.email}
              </span>
              <button className={styles.navbarButton} onClick={handleLogout}>
                Logout
              </button> 
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}