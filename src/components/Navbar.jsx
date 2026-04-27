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
        <div className={styles.navbarContainer}>
          <Link to={"/"}><img src={logo} alt="ElectroShop logo" width={200} /></Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>

        <Link className={styles.navbarLinkHome} to="/"><img src={logo} alt="ElectroShop logo" width={200}/></Link>

        <div className={styles.navbarLinks}> 
          <Link to="/">  <FaHome /> Home</Link>
          <Link to="/checkout"> <FaShoppingCart /> Cart</Link>
        </div>

        <div>

          { !user ? 
            <div className={styles.navbarLinks}>
              <Link to="/auth">Login</Link> 
              <Link to="/auth">Signup</Link>
            </div> : (
            <div>
              <span> <FaUser /> Hello, {user.email} </span>
              <button className={styles.navbarButton} onClick={handleLogout}>Logout</button> 
            </div>
          )}

        </div>

      </div>
    </nav>
  )
}
