import { Link } from "react-router-dom";
import logo from "../../images/lo_goo.png";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.h1}>Page not found</h1>
      <p className={styles.p}>
        We can't seem to find the page you are looking for
      </p>
      <button className={styles.button}>
        <Link to="/">Home</Link>
      </button>
      <br />
      <span className={styles.span}>Help</span>
    </div>
  );
};
export default NotFound;
