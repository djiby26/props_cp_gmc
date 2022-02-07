import Profile from "./profile/Profile";
import ProfileImage from "./images/profile.jpg";

function App() {
  const handleName = (fName) => {
    alert(fName);
  };
  return (
    <div className="App">
      <Profile
        fullName="Pape Djiby Aly Ndione"
        bio="24 yo, live in Dakar,Malika and actually student at Gomycode"
        profession="Fullstack Js developer"
        handleName={handleName}
      >
        {ProfileImage}
      </Profile>
    </div>
  );
}

export default App;
