import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
// import InfoIcon from '@mui/icons-material/Info'
import './add.css'
import { useState } from 'react'
import AddForm from '../Forms/AddForm'
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
			{/* <InfoIcon className='infoIcon' /> */}
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
