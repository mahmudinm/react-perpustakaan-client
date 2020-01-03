import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { DatePickerInput } from '../../../../components/Formik/DatePickerInput';
import { SelectInput } from '../../../../components/Formik/SelectInput';
import { useHistory } from 'react-router-dom';

const PeminjamanForm = ({ peminjaman, users, books, storePeminjaman, updatePeminjaman }) => {
	// gatau kenapa this.props.history undefined terpaksa pakai useHistory 
	let history = useHistory();

	const initialValues = {
		name: '',
		description: '',
		penerbit: '',
		tanggal_terbit: '',
		stock: ''
	}

	return (
		<Formik
			initialValues={peminjaman.id ? peminjaman : initialValues}
	        enableReinitialize
			validationSchema={Yup.object({
				book_id: Yup.string()
					.required('Required'),
				// tanggal_pinjam: Yup.string()
				// 	.required('Required'),
				// tanggal_kembali: Yup.string()
				// 	.required('Required')
			})}
			onSubmit={(data, actions) => {
				if(!data.id) {
					storePeminjaman(data)
						.then((res) => {
							history.push('/peminjaman')
						}, (err) => {
							// Object.keys(err.response.data.error.errors).map((key) => {
							// 	console.log(key, err.response.data.error.errors[key])
							// 	// actions.setFieldError(key, err.response.data.error.errors[key])
							// 	// actions.setStatus(key, err.response.data.error.errors[key])
							// })
							// })
						});
				} else {
					// console.log(data.id);
					updatePeminjaman(data, data.id)
						.then((res) => {
							history.push('/peminjaman')
						}, (err) => {
							// validasi server disini 
						})
				}
			}}
		>
			{formik => (
				<Form>
					<SelectInput
						label="Book"
						type="text"
						name="book_id"
					>
						<option value="">select your book</option>
						{books.map((item, key) => 
							<option value={item.id} key={key}>{item.name}</option>
						)}
					</SelectInput>
					<SelectInput
						label="User"
						type="text"
						name="user_id"
					>
						<option value="">Users</option>
						{users.map((item, key) => 
							<option value={item.id} key={key}>{item.name}</option>
						)}
					</SelectInput>
					<DatePickerInput
						label="Tanggal Pinjam"
						type="text"
						name="tgl_pinjam"
						placeholderText="Enter Tanggal Pinjam here"
						dateFormat="yyyy-MM-dd"
					/>			
					<DatePickerInput
						label="Tanggal Kembali"
						type="text"
						name="tgl_kembali"
						placeholderText="Enter your Tanggal Kembali here"
						dateFormat="yyyy-MM-dd"
					/>							
					<button type="submit" className="btn btn-primary btn-block">
						{peminjaman ? 'UPDATE' : 'CREATE'}
					</button>					
				</Form>
			)}
		</Formik>
	)
}

export default PeminjamanForm;