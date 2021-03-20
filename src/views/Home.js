import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <nav className="Home">
      <h1>Welcome to Ironbeer!</h1>

      <Link className="Links" to="/beer">
        <div>
          <h2>All Beers</h2>
          <p>Have a look at all our beers</p>
          <img src="./../assets/beers.png" alt="" />
        </div>
      </Link>

      <Link className="Links" to="/beer/random">
        <div>
          <h2>Random Beer</h2>
          <p>Let us choose a random beer for you</p>
          <img src="/assets/beers.png" alt="" />
        </div>
      </Link>

      <Link className="Links" to="/beer/new">
        <div>
          <h2>New Beer</h2>
          <p>Create a new beer and add it to our database</p>
          <img src="./assets/beers.png" alt="" />
        </div>
      </Link>
    </nav>
  );
};

export default Home;
