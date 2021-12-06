import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
import './add.css'
import { useState } from 'react'
import AddForm from './AddForm'

const Add = () => {
	const [visible, setVisible] = useState(false)
	const toggleForm = () => {
		setVisible(!visible)
	}
	return (
		<div className='addCircle'>
			<AddCircleOutlineSharpIcon
				onClick={() => {
					toggleForm()
				}}
			/>
			{visible && <AddForm click={toggleForm} />}
		</div>
	)
}

export default Add
