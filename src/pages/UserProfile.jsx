import { useState, useEffect, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/userprofile.scss";
import Profile from "../tabs/Profile";
import Password from "../tabs/Password";
import AllPlaces from "../tabs/AllPlaces";
import AddPlace from "../tabs/AddPlace";
const UserProfile = () => {
  //  const context = useContext(Context)
  const [tab, setTab] = useState("Profile");
  useLayoutEffect(() => {
    document.title = `Spots : ${tab}`;
  }, [tab]);
  function showTab(tabname) {
    setTab(tabname);
    const arr = document.querySelectorAll(".tabitem");
    arr.forEach((item) => {
      item.onclick = (e) => {
        for (const li of arr) {
          li.classList.remove("active");
        }
        e.target.classList.add("active");
      };
    });
  }
  function MainComponent(props) {
    switch (tab) {
      case "Profile":
        return <Profile  tab={tab}/>;

      case "Password":
        return <Password />;

      case "AddPlace":
        return <AddPlace />;

      case "AllPlaces":
        return <AllPlaces />;

      default:
        console.log("invalid");
    }
  }
  return (
    <>
      <main className="main">
        <aside className="navbar">
          <ul>
            <li>
              <h4 className="logo">Spots</h4>
            </li>
            <li className="tabitem active" onClick={() => showTab("Profile")}>
              Profile
            </li>
            <li className="tabitem" onClick={() => showTab("Password")}>
              Password setting
            </li>
            <li className="tabitem" onClick={() => showTab("AllPlaces")}>
              My places
            </li>
            <li className="tabitem" onClick={() => showTab("AddPlace")}>
              Add places
            </li>
          </ul>
        </aside>
        <div className="container">
          <MainComponent></MainComponent>
        </div>
      </main>
    </>
  );
};

export default UserProfile;
