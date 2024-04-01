/** @format */

import styles from "./rating.module.css";
import { RiStarSmileFill } from "react-icons/ri";

function Rating(props) {
  return (
    <div className={styles.cardRating}>
      <RiStarSmileFill />
      <p>{props.rating}/5</p>
    </div>
  );
}

export default Rating;
