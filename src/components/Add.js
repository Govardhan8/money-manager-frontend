import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
import './add.css'
import { useState } from 'react'
import AddForm from './AddForm'
import OutsideClickHandler from 'react-outside-click-handler'

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
			<OutsideClickHandler
				onOutsideClick={() => {
					setVisible(false)
				}}
			>
				{visible && <AddForm click={toggleForm} />}
			</OutsideClickHandler>
		</div>
	)
}

export default Add
