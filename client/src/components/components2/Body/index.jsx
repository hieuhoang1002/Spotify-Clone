//import { Fragment } from "react";
import Playlists from "../../../components/Playlists";
import styles from "./styles.module.scss";
//import playlistImg from "../../images/rock.jpg";

const playlists1 = [
  {
    _id: 1,
    img: "https://i.scdn.co/image/ab67706f00000002d5099a2e22f6c09f0b0ac0d9",
    name: "Hot Hits VietNam",
    desc: "By Jahangeer",
  },
  {
    _id: 2,
    img: "https://i.scdn.co/image/ab67706f0000000230949dd0cc6b7b1c262f0260",
    name: "EQUAL VietNam",
    desc: "By Jahangeer",
  },
  {
    _id: 3,
    img: "https://i.scdn.co/image/ab67706f000000020c791ec9b9932f4f998fefe7",
    name: "Em và Trịnh",
    desc: "By Jahangeer",
  },
  {
    _id: 4,
    img: "https://i.scdn.co/image/ab67706f000000023466e2ac76e504f4131af598",
    name: "Music For Concentration",
    desc: "By Jahangeer",
  },
  {
    _id: 5,
    img: "https://i.scdn.co/image/ab67706f000000024a46a7f4e55bbc386dc77f84",
    name: "On Rainy Days",
    desc: "By Jahangeer",
  },
  {
    _id: 6,
    img: "https://i.scdn.co/image/ab67706f0000000265af49474d91827160b56b27",
    name: "Alone Again",
    desc: "By Jahangeer",
  },
  {
    _id: 7,
    img: "https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86",
    name: "Lofi Beats",
    desc: "By Jahangeer",
  },
  {
    _id: 8,
    img: "https://i.scdn.co/image/ab67706f00000002bd72d1d96de9b8fc169d1b84",
    name: "Love Myself",
    desc: "By Jahangeer",
  },
];
const playlists2 = [
  {
    _id: 1,
    img: "https://i.scdn.co/image/ab67706f0000000265af49474d91827160b56b27",
    name: "Alone Again",
    desc: "By Jahangeer",
  },
  {
    _id: 2,
    img: "https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86",
    name: "Lofi Beats",
    desc: "By Jahangeer",
  },
  {
    _id: 3,
    img: "https://i.scdn.co/image/ab67706f00000002bd72d1d96de9b8fc169d1b84",
    name: "Love Myself",
    desc: "By Jahangeer",
  },
  {
    _id: 4,
    img: "https://i.scdn.co/image/ab67706f00000002e62c54dd6ab2db86738f954d",
    name: "Phương Ly",
    desc: "By Jahangeer",
  },
  {
    _id: 5,
    img: "https://i.scdn.co/image/ab6761610000f178ab3c4fca5454a6e1a486ee0c",
    name: "BTS",
    desc: "By Jahangeer",
  },
];

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h1>Lựa chọn của ABX</h1>
        <p>SEE ALL</p>
      </div>
      <div className={styles.playlists_container}>
        <Playlists playlists={playlists1} />
      </div>

      <div className={styles.category}>
        <h1>V-pop</h1>
        <p>SEE ALL</p>
      </div>
      <div className={styles.playlists_container}>
        <Playlists playlists={playlists2} />
      </div>

      <div className={styles.category}>
        <h1>K-pop</h1>
        <p>SEE ALL</p>
      </div>
      <div className={styles.playlists_container}>
        <Playlists playlists={playlists2} />
      </div>

      <div className={styles.category}>
        <h1>Lofi</h1>
        <p>SEE ALL</p>
      </div>
      <div className={styles.playlists_container}>
        <Playlists playlists={playlists2} />
      </div>

      <div className={styles.category}>
        <h1>Soundtrack</h1>
        <p>SEE ALL</p>
      </div>
      <div className={styles.playlists_container}>
        <Playlists playlists={playlists2} />
      </div>

      <div className={styles.footer_playlist}>
        <hr />
      </div>
    </div>
  );
};

export default Body;
