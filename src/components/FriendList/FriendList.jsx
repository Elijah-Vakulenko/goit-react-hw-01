import React from 'react'

import styles from './FriendList.module.css'

const FriendList = () => {
  return (
      <div>
          <ul className={styles.list}>
        {friends.map(friend => (
          <li key={friend.id}><FriendListItem /></li>
        ))}
          </ul>
    </div>
  )
}

export default FriendList