import React from 'react'
import s from './RecentlyPlayed.module.scss'

const RecentlyPlayed = () => {
  return (
    <div className={s.recently}>
        <h2 className={s.title}>
            Recently played list
        </h2>
        <ul className={s.cardList}>
          <li className={s.cardItem}></li>
        </ul>
    </div>
  )
}

export default RecentlyPlayed