import { ADD_SONG, REMOVE_SONG, UPDATE_NOTIFICATIONS, VOTE_UP, VOTE_DOWN, ORDER_BY_VOTES } from '../actions/actionTypes';

export default (state = {
	notifications: 0,
	librarySongs: []
}, action) => {
	switch (action.type) {
		case ADD_SONG:
		let notifications;
		let concatenation = [...state.librarySongs, action.song];
		let uniqueSongs = concatenation.filter((item, pos) => {
				return concatenation.indexOf(item) === pos
			});

		if (state.librarySongs.length === uniqueSongs.length) {
			notifications = state.notifications;
		} else {
			notifications = state.notifications + 1;
		}

		return Object.assign({}, state, {
			notifications: notifications,
			librarySongs: uniqueSongs
		})

		case REMOVE_SONG:
			let updatedSongs = state.librarySongs.filter((song) => {
				if (song.id === action.songId) {
					return false;
				} else {
					return true;
				}
			});

			return Object.assign({}, state, {
				librarySongs: updatedSongs,
				notifications: state.notifications ? state.notifications - 1 : state.notifications
			});

		case UPDATE_NOTIFICATIONS:
			return Object.assign({}, state, {
				notifications: 0
			});

		case VOTE_UP:
			return vote(state, 1, action);

		case VOTE_DOWN:
			return vote(state, -1, action);

		case ORDER_BY_VOTES:
			let reorderedSongList = [...state.librarySongs];
			reorderedSongList.sort((a, b) => {
				return b.popularity - a.popularity;
			});
			return Object.assign({
				notifications: state.notifications,
				librarySongs: reorderedSongList
			});

		default:
			return state;
	}
}

const vote = (state, vote, action) => {
	let libraySongsVoteUpdated = state.librarySongs.map((mySong) => {
		if(mySong.id === action.songId) {
			mySong.popularity = mySong.popularity + vote;
		}
		return mySong;
	});

	return Object.assign({}, {
		notifications: state.notifications,
		librarySongs: libraySongsVoteUpdated
	});
}
