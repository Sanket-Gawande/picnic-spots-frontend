import { useState } from "react";
import { useAuth } from "../auth/auth";
const Password = () => {
  // calling use auth hook to get user details
  const auth = useAuth()
  const [data, setdata] = useState({
    oldpassword : "", 
    newpassword : "",
    c_password : ""
  });

  function writeInput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
 async  function submit(e) {
    e.preventDefault();
    const userIn = auth.user().userIn
    const payload = JSON.stringify({userIn , data})
    const request = await fetch("/api/password/change" , {
      method : "post" ,
      body : payload,
      headers : {
        "Content-type" : "application/json"
      }
    })
    const response = await request.json();
    console.log(response)

  }
  return (
    <div className="center-div">
      <form onSubmit={(e) => submit(e)}>
        <h4>Create an account</h4>
        <div>
          <input
            required
            type="password"
            placeholder="Old password"
            name="oldpassword"
            onInput={(e) => writeInput(e)}
            value={data.oldpassword}
          />
          <br />
          <input
            required
            type="password"
            placeholder=" New Password"
            name="newpassword"
            onInput={(e) => writeInput(e)}
            value={data.newpassword}
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
          <button class="button">Change password</button>
        </div>
      </form>
    </div>
  );
};

export default Password;
