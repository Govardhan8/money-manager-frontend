import { useState } from 'react'
import EditForm from './EditPage'
import './transaction.css'
import OutsideClickHandler from 'react-outside-click-handler'

const Transactions = ({ data }) => {
	//To check if editing is allowed or not
	const [editPage, setEditPage] = useState(false)
	const editOption = () => {
		const timestamp = new Date(data.timestamp)
		const currDate = new Date()
		const edit = timestamp.getTime() > currDate.getTime() - 12 * 60 * 60 * 100
		return edit
	}
	const edit = editOption()

	//To display timing for the transaction
	const date = new Date(data.date)
	const month = date.getMonth() + 1
	const newDate = date.getDate() + '/' + month + '/' + date.getFullYear()

	return (
		<>
			<div
				className='transactions'
				onClick={() => {
					setEditPage(!editPage)
				}}
			>
				<p className='category'>{data.category}</p>
				<div>
					<p
						className='amount'
						style={{
							color: data.type.toLowerCase() === 'income' ? '#12e42b' : 'red',
						}}
					>
						₹{data.amount}
					</p>
					<p className='date'>{newDate}</p>
				</div>
			</div>
			<OutsideClickHandler
				onOutsideClick={() => {
					setEditPage(false)
				}}
			>
				{/* Displaying edit page when clicked on the transaction */}
				{editPage && (
					<EditForm
						data={data}
						//Edit page for the transaction
						click={() => {
							setEditPage(false)
						}}
						edit={edit}
					/>
				)}
			</OutsideClickHandler>
		</>
	)
}

export default Transactions
