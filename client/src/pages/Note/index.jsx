import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Note = ({ title, desc }) => {
  console.log(title, desc);
  return (
    <div className={styles.containers}>
      <div className={styles.arrow}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.notnow}>Not Now</button>
          <button className={styles.loginnow}>
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;
