import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../components/search_bar';
import SongList from '../components/song_list';

const BASE_URL = 'https://api.spotify.com/v1/search?type=track&';

const style = {
  marginTop: "80px"
};

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
      // console.log('SpotifyContainer this.state.songs', this.state.songs);
    })
  }

  render() {
    return (
      <div className="wow fadeIn">
        <h2
          className="text-center"
          style={style}>
          Whether you're loading up your llama or already on a long journey with your goofy animal friend, listen to some songs to get in the groove.</h2>
        <SearchBar
          onSongSearch={this.songSearch} />
        <SongList
          songs={this.state.songs} />
      </div>
    )
  }
}

export default SpotifyContainer;
