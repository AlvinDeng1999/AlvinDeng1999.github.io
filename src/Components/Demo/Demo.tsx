import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import { useState } from 'react'
import './Demo.css'

export default function Demo() {
	const [count, setCount] = useState(0)

	return <>
		<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Count is {count}
				</button>
			</div>
			<p className="read-the-docs">
				~Spin~
			</p>
	</>
}