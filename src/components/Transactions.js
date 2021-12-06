import './transaction.css'

const Transactions = ({ data }) => {
	const date = new Date(data.date)
	const newDate =
		date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
	return (
		<div className='transactions'>
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
	)
}

export default Transactions
