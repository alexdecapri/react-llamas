import React, { Component } from 'react';

// term is one character behind what it should be

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="search-bar">
        <form>
        <input
          placeholder="Search Spotify for a song..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <button
          onSubmit={this.handleSongSearch(this.state.term)}
          className="btn btn-success">
          Search
        </button>
        </form>
      </div>
    )
  }

  handleSongSearch(song) {
    this.props.onSongSearch(song);
  }

  onInputChange(event) {
    let term = event;
    this.setState({term});
    setTimeout(() => {
         console.log('this.state.term', this.state.term);
    });
  }

}

export default SearchBar;
