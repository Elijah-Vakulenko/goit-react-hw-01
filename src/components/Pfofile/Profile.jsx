import React from 'react'

const Profile = () => {
  return (
      <div>
  <div>
    <img
      src={userData.avatar}
      alt="User avatar"
    />
    <p>{userData.username}</p>
        <p>{userData.tag}</p>
    <p>{userData.location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
  )
}

export default Profile