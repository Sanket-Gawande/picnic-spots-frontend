import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    c_password: "",
  });
  function writeInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  }

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });

    const { status, msg, response } = await res.json();

    if (status === "error") {
      setWarning(msg);
    }
    if (status === "success") {
      setWarning(null);

      localStorage.setItem("_user_token_", res.user_token);
      auth.login(res.user_token);
      navigate("/", { replace: true });
    }
  }
  return (
    <div class="container">
      {warning && (
        <h4 className="responseMessege visible-danger">{warning} </h4>
      )}
      <form onSubmit={(e) => submit(e)}>
        <h4>Create an account</h4>
        <div>
          <input
            required
            type="text"
            placeholder="Full name"
            name="name"
            onInput={(e) => writeInput(e)}
            value={data.name}
          />
          <br />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onInput={(e) => writeInput(e)}
            value={data.email}
          />
          <br />
          <input
            required
            type="text"
            placeholder="Phone"
            pattern="[0-9]{10}"
            name="phone"
            onInput={(e) => writeInput(e)}
            value={data.phone}
          />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onInput={(e) => writeInput(e)}
            value={data.password}
          />
          <br />
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="c_password"
            onInput={(e) => writeInput(e)}
            value={data.c_password}
          />
          <br />
          <button class="button">Create account</button>
        </div>
        <Link to="/login" class="link">
          {" "}
          Already has an account, login here
        </Link>
      </form>
    </div>
  );
};

export default Signup;
