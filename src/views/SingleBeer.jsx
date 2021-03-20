import React, { Component } from 'react';
import { beerList, singleBeer } from './../services/beer-api';
import { Link } from 'react-router-dom';

class SingleBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    this.loadBeer();
  }

  async loadBeer() {
    const list = await beerList();
    const beer = list.find((item) => item._id === this.props.match.params.id);
    console.log(list);
    console.log(beer);
    this.setState({
      beer,
    });
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        {beer && (
          <>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}

export default SingleBeer;
