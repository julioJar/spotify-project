import React, { Component } from 'react';


class Search extends Component {
  constructor() {
    super();
    this.searchInput = null;
  }

  render() {
    return (
      <div>
        <input ref={(searchInput) => this.searchInput = searchInput} type="text" />
        <button type="submit" onClick={(event) => {
          event.preventDefault();
          const val = this.searchInput.value;
          this.props.searchHandler(val);
        }
        }>Search</button>
      </div>
    )
  }
}

export default Search;
