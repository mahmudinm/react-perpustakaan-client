const initialState = {
	isAuthenticated: false,
	loading: false,
	user: {},
	message: ''
}

const auth = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'SET_LOGIN':
			return {
				...state,
				isAuthenticated: true,
				user: action.value
			}
		case 'SET_LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				user: {}
			}
		default: return state;		
	}
}

export default auth;