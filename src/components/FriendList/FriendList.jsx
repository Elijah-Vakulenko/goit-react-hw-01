import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
      <div>
          <ul className={styles.list}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
          </li>
        ))}
          </ul>
    </div>
  )
}

export default FriendList;