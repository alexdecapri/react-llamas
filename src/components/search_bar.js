import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search Spotify for a song..."
          value={this.state.term}
          onInputChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

}

export default SearchBar;
