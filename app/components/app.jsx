import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const movieDatabase = ('https://api.themoviedb.org/3/movie/550?api_key=1d0514b501ec10b990725f0f8f54ce01')
    fetch(movieDatabase).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        {this.props.children}
      </div>
    )
  }
}
