export default (state = {
	isLoading: false,
	songs: [],
	myLibray: []
}, action) => {
	switch (action.type) {
		case 'RECEIVE_LIST':
			return Object.assign({}, state, {
				songs: action.songList,
				isLoading: false
			});
		case 'REQUEST_LIST':
			return Object.assign({}, state, {isLoading: true});
		default:
			return state;
	}
}
