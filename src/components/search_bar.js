import React, { Component } from 'react';

// term is one character behind what it should be

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }



  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search Spotify for a song..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <button className="btn btn-success">Search</button>
      </div>
    )
  }

  onInputChange(event) {
    var term = event;
    this.setState({term});
    // setTimeout(() => {
    //      console.log('this.state.term', this.state.term);
    // });
  }

}

export default SearchBar;
