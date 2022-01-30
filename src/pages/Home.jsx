import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div>
      <div>
        <img src="./assets/beers.png" alt="beer" />
        <Link style={{ textDecoration: "none", color: "black" }} to="/beers">
          <h2>All Beers</h2>
        </Link>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
        accusamus corporis modi quibusdam dignissimos ea, sit adipisci fugit
        laboriosam corrupti ullam quas repellat libero neque assumenda nesciunt
        porro consequatur voluptas.
      </div>
      <div>
        <img src="./assets/new-beer.png" alt="random" />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/random-beer"
        >
          <h2>Random Beer</h2>
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium
        rem eligendi ullam vero. Temporibus, eum. Porro in velit illum rerum,
        dolore nostrum quia tenetur dolorem, nisi, odio sed reiciendis!
      </div>
      <div>
        <img src="./assets/random-beer.png" alt="new" />
        <Link style={{ textDecoration: "none", color: "black" }} to="/new-beer">
          <h2>New Beer</h2>
        </Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat,
        consequatur laudantium asperiores ipsa consectetur eaque quos ut atque
        sequi earum. Maxime minus distinctio tempora. Rerum quia voluptate
        aspernatur mollitia.
      </div>
    </div>
  );
};

export default Home;
