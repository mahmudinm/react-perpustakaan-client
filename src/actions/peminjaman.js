import api from '../utils/api';

export const getPeminjamanAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('peminjaman')
				.then((res) => {
					dispatch({ type: 'GET_PEMINJAMAN', value: res.data })
					console.log(res.data);
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const createPeminjamanAPI = () => (dispatch) => {
	dispatch({type: 'CREATE_PEMINJAMAN'});
}

export const storePeminjamanAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('book', data)
				.then((res) => {
					dispatch({ type: 'STORE_PEMINJAMAN', value: data })
					resolve(res)
					console.log('this from book store');
				}, (err) => {
					reject(err)
					console.log('this from book store');
				})
		})

	return promise; 
}

export const editPeminjamanAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get(`book/${id}/edit`)
				.then((res) => {
					dispatch({ type: 'EDIT_PEMINJAMAN', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const updatePeminjamanAPI = (data, id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			data._method = "PUT"
			api.post(`book/${id}`, data)
				.then((res) => {
					dispatch({ type: 'UPDATE_PEMINJAMAN', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const deletePeminjamanAPI = (id) => (dispatch) => {
	dispatch({ type: 'DELETE_PEMINJAMAN', value: id })

	const promise = new Promise((resolve, reject) => {
			api.post(`book/${id}`, { _method: 'DELETE' })
				.then((res) => {
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}