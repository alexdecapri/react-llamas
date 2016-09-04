import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1/search?type=track&';

class SpotifyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }
  }

  songSearch(term) {
    return axios.get(`${BASE_URL}q=${term}`)
    .then((response) => {
      console.log(response.data);
      this.setState({
        songs: response.data.tracks.items
      });
      console.log(this.state.songs);
    })
  }

  componentDidMount() {
    this.songSearch('rihanna');
  }

  render() {
    return (
      <div>
        Spotify Container
      </div>
    )
  }
}

export default SpotifyContainer;
