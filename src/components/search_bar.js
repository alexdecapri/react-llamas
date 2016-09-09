import React, { Component } from 'react';

// term is one character behind what it should be

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      term: ''
    }
  }

  // componentWillMount() {
  //   this.props.onSongSearch('rihanna')
  // }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search Spotify for a song..."
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <button
          className="btn btn-success">
          Search
        </button>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSongSearch(this.state.term);
  }

  // handleSongSearch() {
  //   this.props.onSongSearch('rihanna');
  //   console.log(this.props.songs)
  // }

  onInputChange(event) {
    let term = event;
    this.setState({term});
    setTimeout(() => {
         console.log('this.state.term', this.state.term);
    });
  }

}

export default SearchBar;
