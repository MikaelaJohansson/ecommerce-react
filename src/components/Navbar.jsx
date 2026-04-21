import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from "./Navbar.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Navbar() {

  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  function handleLogout() {
    logout();
    navigate("/auth");
  }

  if (isAuthPage){
    return(
      <nav className={styles.navbar}>
        <div>
          <img src={logo} alt="Logo" width={200} />
        </div>
      </nav>
    )
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        <Link className={styles.navbarLinkHome} to="/"><img src={logo} alt="Logo" width={200}/></Link>

        <div className={styles.navbarLinks}> 
          <Link to="/">  <FaHome /> Home</Link>
          <Link to="/checkout"> <FaShoppingCart /> Cart</Link>
        </div>

        <div>

          { !user ? <div>
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
