import { useState } from "react";

const AddPlace = () => {
  const [data, setdata] = useState({});

  function writeInput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function writeInputFile(e) {
    setdata({ ...data, [e.target.name]: e.target.files[0] });
  }

  function submit(e) {
    e.preventDefault();
    console.log(data);
    const form = document.querySelector(".addplaceform");
    const formdata = new FormData(form);
    async function submitform() {
      const response = await fetch("/senddata", {
        method: "post",
        body: formdata,
      });
      const respjson = await response.json();
      console.log(respjson);
    }
    submitform();
  }

  function modal() {
    const modal = document.querySelector(".instruction");
    modal.classList.toggle("modal-open");
  }

  return (
    <div className="center-div">
      <form onSubmit={(e) => submit(e)} className="addplaceform">
        <h4>Add Place</h4>
        <div>
          <label htmlFor="photo">
            <img src="" alt="" />
          </label>
          <input
            type="file"
            className="file-input"
            name="AddPlace-photo"
            onInput={(e) => writeInputFile(e)}
            id="photo"
          />
          <input
            required
            type="text"
            placeholder="Place tittle"
            name="name"
            onInput={(e) => writeInput(e)}
            value={data.name}
          />
          <br />
          <div className="instruction">
            <ol>
              <h5>Instructions to add goggle map</h5>
              <li>Go to google map and locate place you wanted to add</li>
              <li>Click on share button given </li>
              <li>
                <img src="/img/share.png" alt="share place" />
              </li>
              <li>Now click on embed option</li>
              <li>
                <img src="/img/embed.png" alt="embed" />
              </li>
              <li>
                Click on copy html , make sure you had copied link succesfully
              </li>
              <li>Paste the link here</li>
              <input
                type="text"
                name="link"
                placeholder="Paste it here"
                onInput={(e) => writeInput(e)}
                value={data.link}
              />
              <span className="closebutton" onClick={() => modal()}>
                close
              </span>
            </ol>
          </div>
          <input
            readOnly
            required
            type="text"
            onClick={() => modal()}
            placeholder="Map link for this place"
            value={data.link}
          />
          <br />
          <button class="button">Add this place</button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;
