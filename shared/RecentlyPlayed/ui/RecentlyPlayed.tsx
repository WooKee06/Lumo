import React from "react";
import s from "./RecentlyPlayed.module.scss";

const RecentlyPlayed = () => {
  return (
    <div className={s.recently}>
      <h2 className={s.title}>Recently played list</h2>
      <ul className={s.cardList}>
        <li className={s.cardItem}>
          <h3 className={s.cartTitle}>Mix</h3>
          <small className={s.cartDescription}>4 song - 20 mins</small>
        </li>
        <li className={s.cardItem}>
          <h3 className={s.cartTitle}>Mix</h3>
          <small className={s.cartDescription}>4 song - 20 mins</small>
        </li>
        <li className={s.cardItem}>
          <h3 className={s.cartTitle}>Mix</h3>
          <small className={s.cartDescription}>4 song - 20 mins</small>
        </li>
        <li className={s.cardItem}>
          <h3 className={s.cartTitle}>Mix</h3>
          <small className={s.cartDescription}>4 song - 20 mins</small>
        </li>
      </ul>
    </div>
  );
};

export default RecentlyPlayed;
