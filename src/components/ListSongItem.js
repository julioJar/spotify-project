import React, { Component } from 'react';

class ListSongItem extends Component {
  render() {
    const { song } = this.props;
    return (
      <li>
        <p>{ song.name }</p>
        <div>
          <iframe
            src={`https://embed.spotify.com/?uri=${song.uri}`}
            width="80px"
            height="100px"
            frameBorder="0"
            allowTransparency="true"
            />
        </div>
      </li>
    )
  }
}

export default ListSongItem;
