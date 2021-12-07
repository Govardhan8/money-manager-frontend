import { categories } from './global'
import { useState } from 'react'

const FilterPopup = ({ submittedFilter }) => {
	const [division, setDivision] = useState('')
	const [category, setCategory] = useState('')

	return (
		<>
			<select
				name='division'
				id='division'
				onChange={(e) => setDivision(e.target.value)}
			>
				<option>--select a division--</option>
				<option>personal</option>
				<option>office</option>
			</select>
			<select
				name='category'
				id='category'
				onChange={(e) => setCategory(e.target.value)}
			>
				<option>--select a category--</option>
				{categories.map((category) => (
					<option key={category}>{category}</option>
				))}
			</select>
			<button
				type='button'
				onClick={() => {
					submittedFilter(category, division)
				}}
			>
				Apply filters
			</button>
		</>
	)
}

export default FilterPopup
