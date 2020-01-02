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
		case 'CREATE_BOOK':
			return {
				...state,
				book: {}
			}
		case 'STORE_BOOK':
			return {
				...state,
				books: [...state.books, action.value]
			}
		case 'EDIT_BOOK':
			return {
				...state,
				book: action.value
			}
		case 'UPDATE_BOOK':
			const book = action.value
			return {
				...state,
				book: [],				
				books: state.books.map(item => item.id === book.id ? book : item ),
			}
		case 'DELETE_BOOK':
			return {
				books: state.books.filter(item => item.id !== parseInt(action.value))
			}
		default: return state;		
	}
}

export default book;