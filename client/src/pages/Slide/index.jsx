import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./styles.module.scss";

const Slider = () => {
  const images = [
    "https://seed-mix-image.spotifycdn.com/v6/img/nineties/26dSoYclwsYLMAKD3tpOr4/en/default",
    "https://seed-mix-image.spotifycdn.com/v6/img/chill/75Ki5hBCOpDtKGoFyTvLxP/en/default",
    "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    "https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/72nLe76yBFSlP6VBzME358/en/default",
    "https://seed-mix-image.spotifycdn.com/v6/img/telugu/2FgHPfRprDaylrSRVf1UlN/en/default",
    "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb507cd4d6d349b4732deaf895/en",
    "https://seed-mix-image.spotifycdn.com/v6/img/k_pop/3Lz3vEN23Fw0hIelrYEzUD/en/default",
    "https://seed-mix-image.spotifycdn.com/v6/img/mandopop/14bJhryXGk6H6qlGzwj3W5/en/default",
    "https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3",
  ];

  return (
    <Slide>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[3]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[4]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[5]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[6]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[7]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[8]})` }}></div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ backgroundImage: `url(${images[9]})` }}></div>
      </div>
    </Slide>
  );
};

export default Slider;
