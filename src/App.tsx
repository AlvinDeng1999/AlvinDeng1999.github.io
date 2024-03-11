import './App.css'
import Header from './Components/Header/Header.tsx'
import Demo from './Components/Demo/Demo.tsx'
import NavBar from './Components/NavBar/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import Yuumi from './Components/Yuumi/Yuumi.tsx'
import Home from './Components/Home/Home.tsx'

export default function App() {
	return (
		<>
			<div>
				<Header />
				<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/yuumi" element={<Yuumi />} />
						<Route path="/demo" element={<Demo />} />
					</Routes>
			</div>
		</>
	)
}
