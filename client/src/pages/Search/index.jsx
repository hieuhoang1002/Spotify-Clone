import { Fragment, useState } from "react";
import JSONDATA from "../../MOCK_DATA.json";
import styles from "./styles.module.scss";
import Sidebar from "../../components/components2/Sidebar/Sidebar";
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Slider from "../Slide";
import { UserAuth } from "../../contexts/AuthContext";

const MOCK_DATA = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = UserAuth();

  return (
    <Fragment>
      <Sidebar />
      <Footer />
      <div className={styles.containers}>
        <div className={styles.container}>
          <nav className={styles.navbar_container}>
            <div className={styles.search_bar}>
              <FaSearch className={styles.icon1} />
              <input
                type="text"
                placeholder="Artists, songs, or podcasts"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <div className={styles.AvatarandName}>
              <CgProfile className={styles.icon2} />
              {/* <span>Hoàng Trung Hiếu</span> */}
              <span>{user?.displayName}</span>
              <span>{user && user.email}</span>
            </div>
          </nav>
        </div>

        <div className={styles.body}>
          <div className={styles.header_container}>
            <div className={styles.header_left}>
              <div className={styles.header_1}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d00001e020dfdbae46bfeb56697ca35acab67616d00001e021fd0a8fc28b2a0a5d9cdc6c6ab67616d00001e0241e31d6ea1d493dd77933ee5ab67616d00001e0282c1b5cc2b62cae85ef7ffdb"
                  alt=""
                />
                <p>Made For you</p>
              </div>
              <div className={styles.header_2}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d00001e02005799610338a5b57d865926ab67616d00001e0215a67578922d65121b12073dab67616d00001e0248f4704427189fe1957d2871ab67616d00001e02e099e697d0068b652fe6814e"
                  alt=""
                />
                <p>Trending</p>
              </div>
              <div className={styles.header_3}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d00001e02141cf717cd3993690358a60cab67616d00001e028a3f0a3ca7929dea23cd274cab67656300005f1f1ca1ad292ccefdb9b8e03b8eab67656300005f1f55d0dd0d4adcd780add4ff34"
                  alt=""
                />
                <p>Broken Heart</p>
              </div>
              <div className={styles.header_4}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d0000b2731fd0a8fc28b2a0a5d9cdc6c6ab67616d0000b273829305487c8f3b96a1d955b3ab67616d0000b2738fbcf6544ff02a8959a81781ab67616d0000b273f7da7c0f322b7a1c95190d92"
                  alt=""
                />
                <p>Moody Mix</p>
              </div>
              <div className={styles.header_5}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d0000b2731229aa0c03472971c35f93caab67616d0000b273862ec173cc4fb26292c7befbab67616d0000b273afb5e5bc125efd4405cc3061ab67616d0000b273f529cf1a5cd5ef2671f1781b"
                  alt=""
                />
                <p>Rainy Day Jazz</p>
              </div>
              <div className={styles.header_6}>
                <img
                  src="https://mosaic.scdn.co/640/ab67616d0000b2732a0bd76d87295a3aa292b206ab67616d0000b2736f7355de609524cb46c0ab47ab67616d0000b273ab0fb0f89f2b5d655b10abf1ab67616d0000b273d0e55832fecad252dd29ed9d"
                  alt=""
                />
                <p>Your Time Capsule</p>
              </div>
            </div>

            <div className={styles.header_right}>
              <Slider />
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.text_footer}>
              <h2>Browse all</h2>
            </div>
            <div className={styles.playlist_footer}>
              {" "}
              {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                } else if (
                  val.description
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              }).map((val, key) => {
                // if (val.id === 2) {
                //   return (
                //     <div key={key}>
                //       <p>{val.id}</p>
                //       <img src={require(val.image)} alt="" />

                //       {/* <p>{val.title}</p> */}
                //     </div>
                //   );
                // }
                return (
                  <div key={key} className={styles.background_playlist}>
                    {/* <p>{val.id}</p> */}
                    <img src={val.image} alt="" />
                    <p>{val.title}</p>
                    <span>{val.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MOCK_DATA;
