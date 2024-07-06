import React from 'react'

import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={s.card}>
      <img className={s.photo} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
    </div>
  );
};

export default FriendListItem;