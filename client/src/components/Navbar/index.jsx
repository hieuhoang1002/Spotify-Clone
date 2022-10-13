import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
  { name: "Sign up", link: "/signup" },
  { name: "Log in", link: "/login" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar_container}>
        <div className={styles.nav_links}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.link} className={styles.links}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
