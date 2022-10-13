import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import logo from "../../../images/lo_goo.png";
import styles from "./styles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { BsFillCaretRightSquareFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src={logo} alt="logo" />
        <div className={styles.text_name}>
          <h1>ABX</h1>
          <p>Music</p>
        </div>
      </div>
      <NavLink
        to="/home"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <SearchIcon />
        <span>Search</span>
      </NavLink>
      <button className={styles.menu_link}>
        <LibraryMusicIcon />
        <span>Your Library</span>
      </button>

      <button className={styles.create__btn}>
        <AddIcon />
        <span>Create Playlist</span>
      </button>
      <button className={styles.menu_link}>
        <BsFillCaretRightSquareFill />
        <span>MV</span>
      </button>
    </div>
  );
};

export default Sidebar;
