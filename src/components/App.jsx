import Profile from "../components/Pfofile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";



const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  )
}

export default App;