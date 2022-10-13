import PlayItem from "../PlayItem";

const SongList = ({ songs = [] }) => {
  const songTags = songs.map((song, index) => {
    return <PlayItem song={song} key={index} index={index} />;
  });
  return <div id="song-list">{songTags}</div>;
};
export default SongList;
