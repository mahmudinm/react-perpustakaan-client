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
		default: return state;		
	}
}

export default auth;