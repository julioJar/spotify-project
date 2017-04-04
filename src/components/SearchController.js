import React, { Component } from 'react';
import Search from './Search';


class SearchController extends Component {
  _searchHandler(searchValue) {
    const val = searchValue.toString().trim();

    if (val.length) {
      this.props.addListSongs(val, 'track', 20, 0);
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Search searchHandler={this._searchHandler.bind(this)} />
    );
  }
}

export default SearchController;
