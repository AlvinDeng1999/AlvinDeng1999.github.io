import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
	return (
		<nav className="nav">
			<ul>
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/yuumi">Yuumi</CustomLink>
				<CustomLink to="/demo">Demo</CustomLink>
			</ul>
		</nav>
	)
}

function CustomLink({ to, children, ...props }: { to: string, children: React.ReactNode } ) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}