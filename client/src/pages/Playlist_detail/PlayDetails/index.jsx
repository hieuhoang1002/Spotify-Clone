import { connect } from "react-redux";
import { selectSong } from "../actions";
import styles from "./styles.module.scss";

const SongDetail = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
}) => {
  if (selectedSongId >= 0) {
    return (
      <>
        <div className={styles.img}>
          <img
            src={songs[selectedSongId].links.images[0].url}
            alt={songs[selectedSongId].author}
          />
        </div>
        <div className={styles.text}>
          <p className="artist-name">{songs[selectedSongId].name}</p>
          <span className="artist-name">{songs[selectedSongId].author}</span>
        </div>
      </>
    );
  } else {
    selectSong(defaultSong);
    return null;
  }
};
const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);
