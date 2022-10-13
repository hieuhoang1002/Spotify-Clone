import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiPauseCircle } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import TimeSlider from "react-input-slider";
//import songs from "../Data/songs.json";
import Volume from "../Volume";
import { connect, useDispatch } from "react-redux";
import { selectSongById, setPlayerState } from "../actions";
import SongDetail from "../PlayDetails";

const PlayMusic = ({
  selectedSongId,
  selectSongById,
  defaultSong,
  playerState,
  songs,
  volume,
}) => {
  const dispatch = useDispatch();
  const [shuffled] = useState(false);
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay] = useState(false);
  let clicked = false;

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const HandleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
  };

  const spaceDownFunc = (event) => {
    if (event.keyCode === 32 && !clicked) {
      clicked = true;
      document.getElementsByClassName("main-control")[0].click();
    }
  };
  const spaceUpFunc = (event) => {
    if (event.keyCode === 32 && clicked) {
      clicked = false;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", spaceDownFunc);
    document.addEventListener("keyup", spaceUpFunc);
  }, []);

  if (selectedSongId < 0 || selectedSongId > songs.length - 1) {
    selectSongById(0);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 110;
    }
  }, [volume]);

  const onMusicPlay = (e) => {
    e.preventDefault();

    if (!playerState) {
      audioRef.current.play();
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
    } else {
      audioRef.current.pause();
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    }
  };

  const onBackwardClick = () => {
    if (selectedSongId > 0) {
      selectSongById(selectedSongId - 1);
    }
  };
  const onForwardClick = () => {
    if (selectedSongId < songs.length - 1) {
      selectSongById(selectedSongId + 1);
    }
  };

  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
    audioRef.current.play();
  }, [selectedSongId, dispatch]);
  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    audioRef.current.pause();
  }, [dispatch]);

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_left}>
        <SongDetail />
      </div>
      <div className={styles.audio}>
        <div className={styles.Control_Button_Group}>
          <div className={styles.Random}>
            <FaRandom />
          </div>

          <div className={styles.Previous_Button} onClick={onBackwardClick}>
            <BiSkipPrevious />
          </div>

          <div className={styles.Pause_Play_Button} onClick={onMusicPlay}>
            {playerState ? <BiPauseCircle /> : <BiPlayCircle />}
          </div>
          <div className={styles.Next_Button} onClick={onForwardClick}>
            <BiSkipNext />
          </div>
          <div className={styles.Repeat}>
            <BsArrowRepeat />
          </div>
        </div>
        <div className={styles.TimeSlider}>
          <TimeSlider
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={HandleTimeSliderChange}
            styles={{
              track: {
                backgroundColor: "gray",
                height: "2px",
                width: "50rem",
              },
              active: {
                backgroundColor: "green",
                height: "2px",
              },
              thumb: {
                marginTop: "-2px",
                width: "1.5rem",
                height: "1.5rem",
                backgroundColor: "white",
                borderRadius: 10,
              },
            }}
          />
        </div>
      </div>

      <div className={styles.Volume}>
        <BiVolumeFull className={styles.Volume_icon} />
        <Volume />
      </div>
      <audio
        src={songs[selectedSongId].url}
        controls
        preload="true"
        onEnded={() => {
          selectSongById(
            shuffled
              ? Math.round(Math.random() * songs.length)
              : selectedSongId + 1
          );
        }}
        onLoadedMetadata={() => {
          dispatch({
            type: "SET_DURATION",
            payload: audioRef.current.duration,
          });
        }}
        ref={audioRef}
        hidden
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    playerState: state.playerState,
    songs: state.songs,
    volume: state.volume,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(
  PlayMusic
);
