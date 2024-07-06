import React from 'react'

import s from './FriendListItem.module.css'

const FriendListItem = (friends) => {
  return (
      <div className={s.card}>
          <img src={friends.avatar} alt="Avatar" width="48" />
          <p className={s.name}>{friends.name}</p>
          {friends.isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
      </div>
  )
}

export default FriendListItem