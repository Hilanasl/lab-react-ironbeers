import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [searchedBeer, setSearchedBeer] = useState("");

  let searchedString = null;
  if (searchedBeer !== "") {
    searchedString = beers.filter((item) => {
      return item.name.toLowerCase().includes(searchedBeer.toLowerCase());
    });
  } else {
    searchedString = beers;
  }

  console.log("searched:", searchedString);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <SearchBar searchedBeer={searchedBeer} callback={setSearchedBeer} />
      <h1 className="title">Beers List</h1>
      <div className="container">
        {beers.map((beer) => {
          return (
            <div className="block" key={beer._id}>
              <div className="imgBlock">
                <img className="beerImg" src={beer.image_url} alt={beer.name} />
              </div>
              <div className="infoBlock">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={beer._id}
                >
                  <h2>{beer.name}</h2>
                </Link>
                <p>{beer.tagline}</p>
                <p>
                  <b>Created by:</b> {beer.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllBeers;
