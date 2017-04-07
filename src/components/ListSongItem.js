import React, { Component } from 'react';

class ListSongItem extends Component {
  render() {
    const { song, addSong, librarySongs, removeSong } = this.props;
    const alreadyAdded = librarySongs.filter((librarySong, pos) => {
				return librarySong.id === song.id
			}).length;
    return (
      <li className="listItem">
        <div className="previewSong">
          <iframe
            src={`https://embed.spotify.com/?uri=${song.uri}`}
            width="441px"
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
        {
          alreadyAdded ?
          <button className="RemoveLibray" onClick={() => {removeSong(song.id)}}>
            <i className="fa fa-minus" />
          </button> : null
        }
        { alreadyAdded ? null :
          <button className="AddLibray" onClick={() => {addSong(song)}}>
            <i className="fa fa-plus" />
          </button>
        }
      </li>
    )
  }
}

export default ListSongItem;
