import { useEffect, useState } from 'react'
import './card.css'

const Card = ({ data }) => {
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)

	useEffect(() => {
		let expenseAmount = 0
		let incomeAmount = 0
		data.forEach((data) => {
			if (data.type.toLowerCase() === 'expense') {
				expenseAmount += data.amount
			} else {
				incomeAmount += data.amount
			}
		})
		setIncome(incomeAmount)
		setExpense(expenseAmount)
	}, [data])

	return (
		<div className='card'>
			<p className='info'>
				<b>Expense</b> <span style={{ color: 'green' }}>₹{expense}</span>{' '}
			</p>
			<p className='info'>
				<b>Income</b> <span style={{ color: 'red' }}>₹{income}</span>{' '}
			</p>
		</div>
	)
}

export default Card
