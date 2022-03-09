
import Home from "./pages/home/Home";
import "./styles/root.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./partials/NavBar";
import Footer from "./partials/Footer";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Places from "./pages/Places";
import Login from "./pages/sign-in-up/Login";
import Signup from "./pages/sign-in-up/Signup";
import UserPlaces from "./pages/UserPlaces";
import RequireAuth from "./auth/RequireAuth";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/profile" exact element={ <RequireAuth><UserProfile/></RequireAuth>} />
          <Route path="/all-places" exact element={<Places />} />
          <Route path="/places/:userid" exact element={<UserPlaces />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
