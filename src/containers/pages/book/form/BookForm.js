import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../../../../components/Formik/TextInput';
import { DatePickerInput } from '../../../../components/Formik/DatePickerInput';
import { useHistory } from 'react-router-dom';

const BookForm = ({ storeBook }) => {
	// gatau kenapa this.props.history undefined terpaksa pakai useHistory 
	let history = useHistory();

	return (
		<Formik
			initialValues={{
				id: '',
				name: '',
				description: '',
				penerbit: '',
				tanggal_terbit: '',
				stock: ''
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.required('Required'),
				description: Yup.string()
					.required('Required'),
				penerbit: Yup.string()
					.required('Required'),
				tanggal_terbit: Yup.string()
					.required('Required'),
				stock: Yup.number()
					.integer('Must Number')
					.required('Required')
			})}
			onSubmit={(data, actions) => {
				storeBook(data)
					.then((res) => {
						history.push('/book')
					});
			}}
		>
			{formik => (
				<Form>
					<TextInput
						label="Name"
						type="name"
						name="name"
						placeholder="Enter your name here"
					/>
					<TextInput
						label="Description"
						type="description"
						name="description"
						placeholder="Enter Description name here"
					/>
					<TextInput
						label="Penerbit"
						type="penerbit"
						name="penerbit"
						placeholder="Enter your Penerbit here"
					/>
					<DatePickerInput
						label="Tanggal Terbit"
						type="tanggal_terbit"
						name="tanggal_terbit"
						placeholderText="Enter your Tanggal Terbit here"
						dateFormat="yyyy-MM-dd"
					/>
					<TextInput
						label="Stock"
						type="stock"
						name="stock"
						placeholder="Enter your Stock here"
					/>
					<button type="submit" className="btn btn-primary btn-block">CREATE</button>					
				</Form>
			)}
		</Formik>
	)
}

export default BookForm;