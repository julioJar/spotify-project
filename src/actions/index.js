require('es6-promise').polyfill();
require('isomorphic-fetch');

function fetchSongList (query, type, limit, pagination) {
	return fetch(`https://api.spotify.com/v1/search?q=${query}&offset=${pagination * limit}&type=${type}&market=US&limit=${limit}`);
}

const receiveList = (songList) => {
	return {
		type: 'RECEIVE_LIST',
		songList
	}
}

const requestList = () => {
	return {
		type: 'REQUEST_LIST'
	}
}
export const addSong = (song) => {
	return {
		type: 'ADD_SONG',
		song
	}
}

export const addListSongs = (query, type, limit, pagination) => (dispatch) =>  {
	dispatch(requestList());
  fetchSongList(query, type, limit, pagination).then((response) => {
    return response.json();

	}).then((data) => {
		if (data.tracks) {
			dispatch(receiveList(data.tracks.items));
		} else if (data.artists) {
			dispatch(receiveList(data.artist.items));
		}
	});
}
