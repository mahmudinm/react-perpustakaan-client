const initialState = {
	peminjaman: {},
	peminjamans: [],
	users: [],
	books: []
}

const peminjaman = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_PEMINJAMAN':
			return {
				...state,
				peminjamans: action.value
			}
		case 'CREATE_PEMINJAMAN':
			return {
				...state,
				peminjaman: {},
				users: action.users,
				books: action.books
			}
		case 'STORE_PEMINJAMAN':
			return {
				...state,
				peminjamans: [...state.peminjamans, action.value]
			}
		case 'EDIT_PEMINJAMAN':
			return {
				...state,
				users: action.users,
				books: action.books,
				peminjaman: action.value
			}
		case 'UPDATE_PEMINJAMAN':
			const peminjaman = action.value
			return {
				...state,
				peminjaman: [],				
				peminjamans: state.peminjamans.map(item => item.id === peminjaman.id ? peminjaman : item ),
			}
		case 'DELETE_PEMINJAMAN':
			return {
				...state,
				peminjamans: state.peminjamans.filter(item => item.id !== parseInt(action.value))
			}
		default: return state;		
	}
}

export default peminjaman;