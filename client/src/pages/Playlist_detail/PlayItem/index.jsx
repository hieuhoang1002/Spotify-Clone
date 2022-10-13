import React, { useState } from "react";
import styles from "./styles.module.scss";
import { connect, useDispatch } from "react-redux";
import { selectSong } from "../actions";

const SongItem = ({ song, index, selectSong, selectedSongId, playerState }) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();
  const now_selected = selectedSongId === song.id ? "active" : "";

  const phaser = () => {
    if (selectedSongId === song.id && playerState) {
      return (
        <div>
          <img
            alt=""
            src="/playing.gif"
            id="focused"
            className={styles.iconPlayer}
          />
        </div>
      );
    } else {
      return <div className="index">{index + 1}</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.row}
        id={now_selected}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          selectSong(song);
          dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
        }}
      >
        <p className={styles.col}>{phaser()}</p>

        <p className={styles.col}>
          <img src={song.links.images[0].url} alt={song.author} />
          <p id={styles.title} className={styles.title}>
            {song.name}
          </p>
          <p className={styles.name}>{song.author}</p>
        </p>

        <p className={styles.col}>{song.name}</p>

        <p className={styles.col}>3:12</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    playerState: state.playerState,
  };
};
export default connect(mapStateToProps, { selectSong })(SongItem);
