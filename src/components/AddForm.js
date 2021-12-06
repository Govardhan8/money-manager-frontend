import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import CloseSharpIcon from '@mui/icons-material/CloseSharp'
import axios from 'axios'
// import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { api_url } from '../App'

const categories = [
	'Checks,coupons',
	'Child Support',
	'Dues & grants',
	'Gifts',
	'Interests,dividends',
	'Lending,renting',
	'Lottery, gambling',
	'refunds',
	'Rental income',
	'Sale',
	'Wage,invoices',
]
function refreshPage() {
	window.location.reload(false)
}
const AddForm = ({ click }) => {
	const submitForm = (values) => {
		axios.post(`${api_url}/transactions/add`, values).then(() => {
			click()
			refreshPage()
		})
	}

	const validations = Yup.object().shape({
		description: Yup.string().trim().required('Description is Required'),
		date: Yup.date().required('please enter a rating'),
		amount: Yup.number()
			.min(1, 'minimum of 1rs needed')
			.required('summary required'),
		division: Yup.string().required('division required'),
		category: Yup.string().required('trailer required'),
		type: Yup.string().required('type required'),
	})

	const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
		useFormik({
			initialValues: {
				description: '',
				date: '',
				amount: '',
				division: '',
				category: '',
				type: '',
			},
			validationSchema: validations,
			onSubmit: (values) => {
				submitForm(values)
			},
		})

	return (
		<form className='form' onSubmit={handleSubmit}>
			<div className='relative'>
				<CloseSharpIcon
					className='close'
					onClick={() => {
						click()
					}}
				/>
			</div>
			<TextField
				id='description'
				name='description'
				label='Description'
				value={values.description}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.description && touched.description}
				helperText={
					errors.description && touched.description && errors.description
				}
			/>
			<TextField
				id='date'
				name='date'
				type='datetime-local'
				value={values.date}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.date && touched.date}
				helperText={errors.date && touched.date && errors.date}
			/>
			<TextField
				id='amount'
				name='amount'
				label='amount'
				type='number'
				value={values.amount}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.amount && touched.amount}
				helperText={errors.amount && touched.amount && errors.amount}
			/>
			<select
				id='division'
				name='division'
				value={values.division}
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option>--Select a division--</option>
				<option>PERSONAL</option>
				<option>OFFICE</option>
			</select>
			<span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '1rem' }}>
				{' '}
				{errors.division && touched.division && errors.division}
			</span>
			<select
				name='category'
				id='category'
				value={values.category}
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option>--Select a category--</option>
				{categories.map((cat) => (
					<option key={cat}>{cat}</option>
				))}
			</select>
			<span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '1rem' }}>
				{' '}
				{errors.category && touched.category && errors.category}
			</span>
			<select
				id='type'
				name='type'
				value={values.type}
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option>--Select a type--</option>
				<option>INCOME</option>
				<option>EXPENSE</option>
			</select>
			<span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '1rem' }}>
				{errors.type && touched.type && errors.type}
			</span>
			<Button variant='contained' type='submit'>
				SUBMIT
			</Button>
		</form>
	)
}

export default AddForm
