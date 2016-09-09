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
      <div className="search-bar text-center">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
          <input
            className="form-control"
            id="input"
            placeholder="Search Spotify for a song..."
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
          <button
            className="btn btn-success">
            Search
          </button>
          </div>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSongSearch(this.state.term);
    this.setState({ term: '' });
  }

  // handleSongSearch() {
  //   this.props.onSongSearch('rihanna');
  //   console.log(this.props.songs)
  // }

  onInputChange(event) {
    let term = event;
    this.setState({term});
    // setTimeout(() => {
    //      console.log('this.state.term', this.state.term);
    // });
  }

}

export default SearchBar;
