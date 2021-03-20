import React, { Component } from 'react';

class NewBeer extends React.Component {
  state = {
    name: 'name',
    tagline: 'tagline',
    description: 'description',
    first_brewed: 'first brewed',
    brewers_tips: 'tipss',
    attenuation_level: 5,
    contributed_by: 'Anna',
  };

  handleGenericChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    alert(
      `Received submission: ${name}, ${tagline}, ${description}, ${first_brewed}, ${brewers_tips}, ${attenuation_level}, ${contributed_by}.`
    );
  };

  render() {
    return (
      <div className="App">
      <h1>newww</h1>
        <form onSubmit={this.handleSubmission}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Tagline"
            name="tagline"
            onChange={this.handleNameChange}
            value={this.state.tagline}
          />
          <input
            type="text"
            placeholder="First brewed"
            name="irst_brewed"
            onChange={this.handleNameChange}
            value={this.state.first_brewed}
          />
          <input
            type="text"
            placeholder="Brewers tips"
            name="brewers_tips"
            onChange={this.handleNameChange}
            value={this.state.brewers_tips}
          />

          <input
            type="text"
            placeholder="Attenuation level"
            name="attenuation_level"
            onChange={this.handleGenericChange}
            value={this.state.attenuation_level}
          />
          <input
            type="text"
            placeholder="Contributed by"
            name="contributed_by"
            onChange={this.handleNameChange}
            value={this.state.contributed_by}
          />
          <button>Submit</button>
        </form>
        <p>Hello, my name is {this.state.name}.</p>
      </div>
    );
  }
}

export default NewBeer;
