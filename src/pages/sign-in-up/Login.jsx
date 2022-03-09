import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-page.css";
import { useAuth } from "../../auth/auth";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [data, setData] = useState({ email: "", password_string: "" });
  function writeInput(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function submit(e) {
    e.preventDefault();
try{
    const req = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    const res = await req.json();
    if (res.status === "error") {
      setWarning(res.message);
    } else if (res.status === "success") {
     
      localStorage.setItem("_user_token_", res.user_token);
      auth.login(res.user_token);
      navigate("/", { replace: true });
    } else {
      console.log("something wrong");
    }}
    catch(err){
      setWarning("This service is down due some issues ,please visit after some time")
      console.log(err)
    }
  }
  return (
    <div className="container">
      {warning && <h4 className="responseMessege visible-danger">{warning}</h4>}
      <form onSubmit={(e) => submit(e)} autoComplete="off">
        <h4>Login here !</h4>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          onInput={(e) => writeInput(e)}
          value={data.email}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          name="password_string"
          onInput={(e) => writeInput(e)}
          value={data.password}
        />
        <br />
        <button className="button" type="submit">
          Login
        </button>
        <Link className="link" to="/resetpassword">
          Forget the password
        </Link>
        <Link className="link" to="/signup">
          Dont have an account , create one !
        </Link>
      </form>
    </div>
  );
};

export default Login;
