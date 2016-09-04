import React, { Component } from 'react';

// term is one character behind what it should be

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search Spotify for a song..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

}

export default SearchBar;
