import React from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { UserAuth } from "../../../contexts/AuthContext";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
];

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar_container}>
        <div className={styles.nav_links}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.link} className={styles.links}>
              {link.name}
            </Link>
          ))}

          {/* <Link to="/"> */}
          <button onClick={handleLogout} className={styles.btn_logout}>
            LogOut
          </button>
          {/* </Link> */}

          {/* <Link to="/update_profile">
            <button className={styles.btn_updateProfile}>UpdateProfile</button>
          </Link> */}
        </div>

        <div className={styles.AvatarandName}>
          <CgProfile className={styles.icon} />

          <span>{user?.displayName}</span>
          <span>{user && user.email}</span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
