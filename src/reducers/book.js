const initialState = {
	book: {},
	books: []
}

const book = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_BOOK':
			return {
				...state,
				books: action.value
			}
		case 'STORE_BOOK':
			return {
				...state,
				books: [ ...state.books, action.value]
			}
		default: return state;		
	}
}

export default book;