import React, { Component } from 'react';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchFocus: false
    }
    this.searchInput = null
  }

  render() {
    let classes = `searchbox ${this.state.searchFocus ? 'searchbox--active' : ''}`;
    return (
      <div className={classes}>
        <input
          type="text"
          ref={(input) => { this.searchInput = input}}
          onFocus={ () => {this.setState({searchFocus: true})}}
          onBlur={ () => {this.setState({searchFocus: false})}}
        />
        <button
          onClick={() => {
            this.props.searchHandler(this.searchInput.value);
            this.searchInput.value = '';
          }}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default Search;
