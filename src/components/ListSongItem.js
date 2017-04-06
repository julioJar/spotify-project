import React, { Component } from 'react';

class ListSongItem extends Component {
  render() {
    const { song } = this.props;
    return (
      <li className="listItem">
        <div className="previewSong">
          <iframe
            src={`https://embed.spotify.com/?uri=${song.uri}`}
            width="80px"
            height="100px"
            frameBorder="0"
            allowTransparency="true"
            />
        </div>
        <div className="songDescription">
          <h4 className="songTitle">Title: { song.name }</h4>
          <p className="songPopularity">Popularity: { song.popularity }</p>
          <p className="songArtists">Artist: { song.artists.map((artist) => {
            return `${artist.name}, `
          })}</p>
        </div>
        <button className="AddLibray">
          <i className="fa fa-plus" />
        </button>
      </li>
    )
  }
}

export default ListSongItem;
