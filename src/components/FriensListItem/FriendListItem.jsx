import React from 'react'

const FriendListItem = (friends) => {
  return (
      <div className='friend-card'>
          <img src={friends.avatar} alt="Avatar" width="48" />
          <p className='friend-name'>{friends.name}</p>
          {friends.isOnline ? <p className='online'>Online</p> : <p className='offline'>Offline</p>}
      </div>
  )
}

export default FriendListItem