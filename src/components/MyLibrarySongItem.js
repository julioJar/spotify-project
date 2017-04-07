import React, { Component } from 'react';

class MyLibraryListItem extends Component {
  render() {
    const { mySong } = this.props;
    return (
      <li className="listItem">
        <div className="previewSong">
          <iframe
            src={`https://embed.spotify.com/?uri=${mySong.uri}`}
            width="441px"
            height="100px"
            frameBorder="0"
            allowTransparency="true"
            />
        </div>
        <div className="songDescription">
          <h4 className="songTitle">Title: { mySong.name }</h4>
          <p className="songPopularity">Popularity: { mySong.popularity }</p>
          <p className="songArtists">Artist: { mySong.artists.map((artist) => {
            return `${artist.name}, `
          })}</p>
        </div>
        <div className="vote">
          <button
            onClick={() => {
              this.props.voteUp(mySong.id);
              this.props.orderByVotes();
            }} className="like"
          >
            <i className="fa fa-thumbs-o-up" aria-hidden="true" /></button>
          <button
            onClick={() => {
              this.props.voteDown(mySong.id);
              this.props.orderByVotes();
            }}
            className="noLike"
          >
            <i className="fa fa-thumbs-o-down" aria-hidden="true" />
          </button>
        </div>
      </li>
    )
  }
}

export default MyLibraryListItem;
