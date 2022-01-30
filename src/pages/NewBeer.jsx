import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log("create beer", response);
        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
        setError("Error, please try again!");
      });
  };

  return (
    <>
      <Header />
      <div className="formContainer">
        <h2>Add a new Beer! 🍺</h2>
        <form onSubmit={handleSubmit}>
          {error !== "" && <p>{error}</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline:</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              rows="5"
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstBrewed">First Brewed:</label>
            <input
              type="text"
              id="firstBrewed"
              name="firstBrewed"
              value={firstBrewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="brewersTips">Brewers Tips:</label>
            <input
              type="text"
              id="brewersTips"
              name="brewersTips"
              value={brewersTips}
              onChange={(e) => setBrewersTips(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="attenuationLevel">Attenuation Level:</label>
            <input
              type="number"
              id="attenuationLevel"
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={(e) => setAttenuationLevel(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contributedBy">Contributed By:</label>
            <input
              type="text"
              id="contributedBy"
              name="contributedBy"
              value={contributedBy}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
