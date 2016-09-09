import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../components/search_bar';
import SongList from '../components/song_list';

const BASE_URL = 'https://api.spotify.com/v1/search?type=track&';

class SpotifyContainer extends Component {
  constructor(props) {
    super(props)

    this.songSearch = this.songSearch.bind(this);

    this.state = {
      songs: []
    }
  }

  songSearch(song) {
    return axios.get(`${BASE_URL}q=${song}`)
    .then((response) => {
      // console.log(response.data);
      this.setState({
        songs: response.data.tracks.items
      });
      console.log('SpotifyContainer this.state.songs', this.state.songs);
    })
  }

  // componentDidMount() {
  //   this.songSearch('rihanna');
  // }

  render() {
    return (
      <div>
        <h2>Spotify Container</h2>
        <SearchBar
          onSongSearch={this.songSearch}
          songs={this.state.songs} />
        <SongList />
      </div>
    )
  }
}

export default SpotifyContainer;
