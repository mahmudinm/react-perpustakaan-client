const initialState = {
	user: {},
	users: []
}

const user = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_USER':
			return {
				...state,
				users: action.value
			}
		case 'CREATE_USER':
			return {
				...state,
				user: {}
			}
		case 'STORE_USER':
			return {
				...state,
				users: [...state.users, action.value]
			}
		case 'EDIT_USER':
			return {
				...state,
				user: action.value
			}
		case 'UPDATE_USER':
			const user = action.value
			return {
				...state,
				user: [],				
				users: state.users.map(item => item.id === user.id ? user : item ),
			}
		case 'DELETE_USER':
			return {
				...state,
				users: state.users.filter(item => item.id !== parseInt(action.value))
			}
		default: return state;		
	}
}

export default user;