import Card from './Card'
import { api_url } from '../App'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Transactions from './Transactions'
import Add from './Add'

const HomePage = () => {
	const [data, setData] = useState(null)
	const [difference, setDifference] = useState(1)
	let currDate = new Date()
	currDate = currDate.getTime() - parseInt(difference) * 24 * 60 * 60 * 1000
	const getData = async () => {
		let JSONdata = await axios.get(`${api_url}/transactions`)
		setData(JSONdata.data)
	}
	useEffect(() => {
		getData()
	}, [])
	let filteredData = data?.filter((data) => {
		const date = new Date(data.date)
		if (currDate < date.getTime()) {
			return data
		}
		return ''
	})

	const handleChange = (e) => {
		setDifference(e.target.value)
		// setData(filteredData)
	}

	return (
		<div>
			{data && (
				<div className='transaction-container'>
					<header>
						<h2>Transactions overview </h2>

						<select
							name='days'
							id='days'
							onChange={(e) => {
								handleChange(e)
							}}
						>
							<option value='1'>Last 24 hours</option>
							<option value='7'>This week</option>
							<option value='30'>This month</option>
							<option value='365'>This year</option>
						</select>
					</header>
					<h3>Expenditure</h3>
					<Card data={filteredData} />
					<h3>Transactions</h3>
					{filteredData.map((data) => (
						<Transactions key={data._id} data={data} />
					))}
				</div>
			)}
			<Add />
		</div>
	)
}

export default HomePage
