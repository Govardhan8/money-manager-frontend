import Card from './Card'
import { api_url } from './global'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Transactions from './Transactions'
import Add from './Add'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import FilterPopup from './FilterPopup'
import './filter.css'

const HomePage = () => {
	const [data, setData] = useState(null)
	const [difference, setDifference] = useState(1)
	const [filterVisible, setFilterVisible] = useState(false)

	let currDate = new Date()
	currDate = currDate.getTime() - parseInt(difference) * 24 * 60 * 60 * 1000

	const getData = async (filter) => {
		let JSONdata = await axios.post(`${api_url}/transactions`, filter)
		setData(JSONdata.data)
	}

	useEffect(() => {
		getData()
	}, [])

	const submittedFilter = (category, division) => {
		if (
			division &&
			division !== '--select a division--' &&
			category &&
			category !== '--select a category--'
		) {
			getData({ category, division })
		} else if (division && division !== '--select a division--') {
			getData({ division })
		} else if (category && category !== '--select a category--') {
			getData({ category })
		}
	}

	let filteredData = data?.filter((data) => {
		const date = new Date(data.date)
		if (currDate < date.getTime()) {
			return data
		}
		return ''
	})

	return (
		<div className='container'>
			{data && (
				<div className='transaction-container'>
					<header>
						<h2>
							Transactions overview{' '}
							<FilterAltIcon
								onClick={() => setFilterVisible(!filterVisible)}
								sx={{ color: 'white' }}
							/>
						</h2>

						<div className='filterContainer'>
							<select
								name='days'
								id='days'
								onChange={(e) => {
									setDifference(e.target.value)
								}}
							>
								<option value='1'>Last 24 hours</option>
								<option value='7'>This week</option>
								<option value='30'>This month</option>
								<option value='365'>This year</option>
							</select>
							{filterVisible && (
								<FilterPopup submittedFilter={submittedFilter} />
							)}
						</div>
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
