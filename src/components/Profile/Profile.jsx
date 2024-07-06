import React from 'react';

import s from './Profile.module.css';

const Profile = ({name, tag, location, avatar, followers, views, likes }) => {
  return (
  <div className={s.card}>
    <div className={s.info}>
      <div className={s.avatar}>
        <img className={s.photo}
          src={avatar}
          alt="User avatar"
        />
      </div>
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.listItem}>
        <span className={s.title}>Followers</span>
        <span className={s.value}>{followers}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.title}>Views</span>
            <span className={s.value}>{views}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.title}>Likes</span>
        <span className={s.value}>{likes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile;