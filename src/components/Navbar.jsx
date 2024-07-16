import { NavLink } from "react-router-dom";
import LogoImage from "../assets/images/LogoImage.png";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <img src={LogoImage} alt="logo" />
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
      </nav>
    </>
  );
}
export default Navbar;
