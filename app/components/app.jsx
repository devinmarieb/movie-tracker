import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }



  componentWillMount() {
    let movieDatabase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1d0514b501ec10b990725f0f8f54ce01&language=en-US&page=1'
    fetch(movieDatabase).then((response) => {
      return response.json();
    }).then((response) => {
        console.log(response.results);
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
