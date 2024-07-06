import React from 'react'

import s from './Profile.module.css'

const Profile = userData => {
  return (
  <div className={s.card}>
    <div className={s.info}>
      <img className={s.photo}
        src={userData.avatar}
        alt="User avatar"
      />
      <p className={s.name}>{userData.username}</p>
      <p className={s.tag}>{userData.tag}</p>
      <p className={s.location}>{userData.location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.title}>Followers</span>
        <span className={s.value}>{userData.stats.followers}</span>
      </li>
      <li>
        <span className={s.title}>Views</span>
            <span className={s.value}>{userData.stats.views}</span>
      </li>
      <li>
        <span className={s.title}>Likes</span>
        <span className={s.value}>{userData.stats.likes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile