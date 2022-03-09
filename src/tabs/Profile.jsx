import { useState, useEffect, useRef } from "react";
import { useAuth } from "../auth/auth";

function Profile({ tab }) {
  const auth = useAuth();
  const imageRef = useRef();
  const buttonRef = useRef();
  const [data, setdata] = useState({
    name: "",
    phone: "",
    bio: "",
    profile: "",
  });
  document.title = "Profile | " + data.name;
const [buttonText , setButtonText] = useState("Update changes");
  /*  getting basic user details on login  */
  useEffect(async () => {
    if (auth.user()) {
      try {
        const response = await fetch(`/api/getuser`, {
          method: "post",
          body: JSON.stringify({ token: auth.user().userIn }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const details = await response.json();
        setdata(details);
      } catch (err) {
        console.log(err);
      }
    }
  }, [buttonText]);


  function writeInput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
    setButtonText("Update changes")
  }
  async function setFile(e) {
    const file = e.target.files[0];
    setdata({ ...data, profile: file });

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imageRef.current.src = reader.result;
      console.log({ data });
    };
  }

  async function submit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    setButtonText("Updating...")
    
   fetch("/api/user/update", {
      method: "POST",
      body: formdata, //data,
      headers: {
        userauthtokenstring: auth.user().userIn,
      },
    })
    .then(raw => raw.json())
    .then(result => {
      setButtonText("Updated");
    })
  }
  return (
    <div className="center-div">
      <form onSubmit={(e) => submit(e)}>
        <h4>My profile</h4>
        <div>
          <label className="user_image" htmlFor="photo">
            <img ref={imageRef} src={data.profile} alt={data.name} />
          </label>
          <input
            type="file"
            onInput={(e) => setFile(e)}
            className="file-input"
            name="profile"
            id="photo"
          />
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
            type="text"
            placeholder="Bio.."
            name="bio"
            onInput={(e) => writeInput(e)}
            value={data.bio}
          />
          <br />
          <button class="button" ref={buttonRef}>
          {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
