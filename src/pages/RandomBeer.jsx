import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <div>
        <div>
          <img
            className="oneBeerImg"
            src={randomBeer.image_url}
            alt={randomBeer.name}
          />
        </div>
        <div>
          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
};

export default RandomBeer;
