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
	const promise = new Promise((resolve, reject) => {
		api.get('peminjaman/create')
			.then((res) => {
				console.log(res);
				console.log(res.data.books);
				dispatch({type: 'CREATE_PEMINJAMAN', users: res.data[0], books: res.data[1]})
				resolve(res)
			}, (err) => {
				reject(err)
			})
	})
}

export const storePeminjamanAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('peminjaman', data)
				.then((res) => {
					dispatch({ type: 'STORE_PEMINJAMAN', value: data })
					resolve(res)
					console.log('this from peminjaman store');
				}, (err) => {
					reject(err)
					console.log('this from peminjaman store');
				})
		})

	return promise; 
}

export const editPeminjamanAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get(`peminjaman/${id}/edit`)
				.then((res) => {
					dispatch({ type: 'EDIT_PEMINJAMAN', value: res.data[0], users: res.data[1], books: res.data[2] })
					console.log(res);
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
			api.post(`peminjaman/${id}`, data)
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
			api.post(`peminjaman/${id}`, { _method: 'DELETE' })
				.then((res) => {
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}