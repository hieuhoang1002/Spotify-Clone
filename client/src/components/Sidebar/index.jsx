import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import logo from "../../images/lo_goo.png";
import styles from "./styles.module.scss";
import Note from "../../pages/Note";
import { useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";

const Sidebar = () => {
  const [modalLibrary, setModalLibrary] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalLikedSong, setModalLikeSong] = useState(false);

  const handleShowModalLibrary = () => {
    setModalLibrary(!modalLibrary);
    setModalCreate(false);
    setModalLikeSong(false);
  };
  const handleShowModalCreate = () => {
    setModalCreate(!modalCreate);
    setModalLibrary(false);
    setModalLikeSong(false);
  };
  const handleShowModalLikedSong = () => {
    setModalLikeSong(!modalLikedSong);
    setModalCreate(false);
    setModalLibrary(false);
  };
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
        to="/"
        className={styles.menu_link}
        activeclassName={styles.active}
      >
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search" className={styles.menu_link}>
        <SearchIcon />
        <span>Search</span>
      </NavLink>
      <button onClick={handleShowModalLibrary} className={styles.menu_link}>
        <LibraryMusicIcon />
        <span>Your Library</span>
      </button>
      <div className={styles.notelibrary} onClick={handleShowModalLibrary}>
        {modalLibrary === true ? (
          <Note
            title="Enjoy your library"
            desc="Log in to see saved songs, podcasts, artists, and playlists in Your Library."
          />
        ) : null}
      </div>

      <button onClick={handleShowModalCreate} className={styles.create__btn}>
        <AddIcon />
        <span>Create Playlist</span>
      </button>
      <div className={styles.noteplaylist} onClick={handleShowModalCreate}>
        {modalCreate === true ? (
          <Note
            title="Create a playlist"
            desc="Log in to see all the songs you've liked in one easy playlist."
          />
        ) : null}
      </div>

      <button onClick={handleShowModalLikedSong} className={styles.menu_link}>
        <BsFillCaretRightSquareFill />
        <span>MV</span>
      </button>
      <div className={styles.notemv} onClick={handleShowModalLikedSong}>
        {modalLikedSong === true ? (
          <Note
            title="Enjoy your Liked Songs"
            desc="Log in to see all the songs you've liked in one easy playlist."
          />
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
