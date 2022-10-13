import React from "react";
import styles from "./styles.module.scss";
import { AiFillClockCircle } from "react-icons/ai";
import Playlists from "../Playlist";
import songs from "../Data/songs.json";
import HandelPlayMusic from "../HandelPlayMusic";
import { UserAuth } from "../../../contexts/AuthContext";

const Body = () => {
  const { user } = UserAuth();

  return (
    <div className={styles.container}>
      <div className={styles.playlist}>
        <div className={styles.image}>
          <img
            src="https://i.scdn.co/image/ab67706f00000002d5099a2e22f6c09f0b0ac0d9"
            alt="img"
          />
        </div>
        <div className={styles.details}>
          <span className={styles.type}>PLAYLIST</span>
          <h1 className={styles.title}>HOT HITS</h1>
          <h3 className={styles.description}>
            {user?.displayName}
            {user && user.email}
          </h3>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.header_row}>
          <div className={styles.col}>
            <span className={styles.icon1}>#</span>
          </div>
          <div className={styles.col}>
            <span>TITLE</span>
          </div>
          <div className={styles.col}>
            <span>ALBUM</span>
          </div>
          <div className={styles.col}>
            <span>
              <AiFillClockCircle />
            </span>
          </div>
        </div>

        <div className={styles.tracks}>
          <div>
            <Playlists songs={songs} />
          </div>
        </div>
      </div>

      <div className={styles.footer_playlist}>
        <hr />
      </div>
      <div>
        <HandelPlayMusic />
      </div>
    </div>
  );
};
export default Body;
