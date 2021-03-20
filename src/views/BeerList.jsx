import React, { Component } from 'react';
import { beerList } from './../services/beer-api';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.loadBeerList();
  }

  async loadBeerList() {
    const list = await beerList();
    this.setState({
      list,
    });
  }

  render() {
    return (
      <div className="BeerList">
        <h1>Beer List</h1>
        <ul>
          {this.state.list.map((beer) => (
            <li key={beer._id}>
              <Link to={`/beer/${beer._id}`}>
                <img src={beer.image_url} alt="{beer.name}" />
                {beer.name} <br />
                {beer.tagline} <br />
                {beer.contributed_by} <br />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BeerList;
