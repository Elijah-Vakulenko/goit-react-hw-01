import React from 'react'

const FriendList = () => {
  return (
      <div>
          <ul className='list'>
        {friends.map(friend => (
          <li key={friend.id}><FriendListItem /></li>
        ))}
          </ul>
    </div>
  )
}

export default FriendList