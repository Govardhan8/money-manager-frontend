import './App.css'
import HomePage from './components/HomePage'

export const api_url = 'http://localhost:5000'
// export const api_url = 'https://money-manager-g.herokuapp.com'
function App() {
	return (
		<div className='App'>
			<HomePage />
		</div>
	)
}

export default App
