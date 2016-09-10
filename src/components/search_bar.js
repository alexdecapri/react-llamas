import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="search-bar text-center row">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
          <input
            className="form-control"
            id="input"
            placeholder="Search Spotify for a song..."
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
          <button
            className="btn btn-success outline special">
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

  onInputChange(event) {
    let term = event;
    this.setState({term});
    // setTimeout(() => {
    //      console.log('this.state.term', this.state.term);
    // });
  }

}

export default SearchBar;
