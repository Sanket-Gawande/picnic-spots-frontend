import React from "react";
import Card from "../../partials/Card";
import "./home.scss";

const Home = () => {
  const cards = [
    {
      name: "Pimpalgaon reserviour wadad",
      author: "Sanket Gawande",
      postedon: new Date().toDateString(),
      thumbnail: "/img/dam.jpg",
    },
    {
      name: "Bhamda gadh mahadev mandir , Wadad",
      author: "PragatiGawande",
      postedon: new Date().toDateString(),
      thumbnail: "/img/mahadeva.jpg",
    },
    {
      name: "Bhamda gadh mahadev mandir , Wadad",
      author: "PragatiGawande",
      postedon: new Date().toDateString(),
      thumbnail: "/img/mahadeva.jpg",
    },
    {
      name: "Bhamda gadh mahadev mandir , Wadad",
      author: "PragatiGawande",
      postedon: new Date().toDateString(),
      thumbnail: "/img/mahadeva.jpg",
    },
    {
      name: "Pimpalgaon reserviour wadad",
      author: "Sanket Gawande",
      postedon: new Date().toDateString(),
      thumbnail: "/img/dam.jpg",
    },
  ];
  const scroll = () => {
    window.scrollTo(0, 800);
  };
  return (
    <div>
      <main>
        <div className="hero-content" id="places">
          <h2>
            Welcome to <span>Spots</span>{" "}
          </h2>
          <p> Get and share beautiful locations on SPOTS,<br />
            know about beutiful places with us or add your if you knows one . 
          </p>
          <button onClick={scroll}> Go to places</button>
        </div>
      </main>
      <section className="card-section">
        <h4 className="card-section_heading">Most famous spots</h4>
        <div className="div-flex">
          {cards.map((data) => {
            const id = Math.random().toString(36).substring(2, 10);
            data.id = id;
            return <Card data={data} key={data.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
