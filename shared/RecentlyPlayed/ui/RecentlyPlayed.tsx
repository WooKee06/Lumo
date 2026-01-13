import React from 'react'
import s from './RecentlyPlayed.module.scss'

const RecentlyPlayed = () => {
  return (
    <div className={s.recently}>
        <h2 className={s.recentlyTitle}>
            Recently played list
        </h2>
    </div>
  )
}

export default RecentlyPlayed