import api from '../utils/api';

export const storeToken = (token) => {
	localStorage.setItem('jwt', JSON.stringify(token))
	api.defaults.headers.common.authorization = `Bearer ${token}`
}

export const loginAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('auth/login', data)
				.then((res) => {
					storeToken(res.data.token)
					dispatch({ type: 'SET_LOGIN', value: res.data })
					console.log(res);
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const logoutAPI = () => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('auth/logout', null)
				.then((res) => {
					dispatch({ type: 'SET_LOGOUT', value: res.data })
					localStorage.removeItem('jwt');
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}


