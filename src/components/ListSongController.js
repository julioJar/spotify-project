import React, { Component } from 'react';

import ListSongItem from './ListSongItem';

class ListSongController extends Component {

  iterateAllsongsSearched() {
    return this.props.songs.map((song, index) => {
        return (
          <ListSongItem
            removeSong={this.props.removeSong}
            addSong={this.props.addSong}
            librarySongs={this.props.library.librarySongs}
            song={song} key={`search-${index}`}
          />
        )
      });
  }

  render() {
    return (
      <ul className="ListContainer">
        { this.iterateAllsongsSearched() }
      </ul>
    )
  }
}

export default ListSongController;
