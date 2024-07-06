import React from 'react'

const Profile = userData => {
  return (
  <div className='profile-card'>
    <div className='profile-info'>
      <img className='profile-photo'
        src={userData.avatar}
        alt="User avatar"
      />
      <p className='profile-name'>{userData.username}</p>
      <p className='profile-tag'>{userData.tag}</p>
      <p className='profile-location'>{userData.location}</p>
    </div>

    <ul className='stats'>
      <li>
        <span className='stats-title'>Followers</span>
        <span className='stats-value'>{userData.stats.followers}</span>
      </li>
      <li>
        <span className='stats-title'>Views</span>
            <span className='stats-value'>{userData.stats.views}</span>
      </li>
      <li>
        <span className='stats-title'>Likes</span>
        <span className='stats-value'>{userData.stats.likes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile