import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const OneBeer = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then(({ data }) => {
        console.log("this is data", data);
        setBeer(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      {beer ? (
        <div>
          <div>
            <img className="oneBeerImg" src={beer.image_url} alt={beer.name} />
          </div>
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      ) : (
        <p>No beer!</p>
      )}
    </>
  );
};

export default OneBeer;
