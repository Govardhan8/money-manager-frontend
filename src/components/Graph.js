import { Doughnut } from 'react-chartjs-2'

//Pie chart data

const Graph = ({ expense, income }) => {
	const Piedata = {
		labels: ['Direct', 'Social'],
		datasets: [
			{
				data: [expense, income],
				backgroundColor: ['red', 'green'],
				hoverOffset: 4,
				cutout: '75%',
				radius: '80%',
			},
		],
	}
	return (
		<div>
			<Doughnut
				data={Piedata}
				options={{
					plugins: {
						legend: {
							display: true,
							position: 'bottom',
							labels: {
								boxWidth: 12,
								boxHeight: 12,
								font: {
									weight: '600',
								},
							},
						},
						elements: {
							arc: {
								borderWidth: 0,
							},
						},
					},
				}}
			/>
		</div>
	)
}

export default Graph
