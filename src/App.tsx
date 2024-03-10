import './App.css'
import Header from './Components/Header/Header.tsx'
import Demo from './Components/Demo/Demo.tsx'
import NavBar from './Components/NavBar/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import Yuumi from './Components/Yuumi/Yuumi.tsx'

function App() {

	return (
		<>
			<div>
				<Header />
				<NavBar />
					<Routes>
						<Route path="/" element={<Demo />} />
						<Route path="/yuumi" element={<Yuumi />} />
					</Routes>
			</div>
		</>
	)
}

export default App
