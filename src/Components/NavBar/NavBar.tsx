import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
	return (
		<nav className="nav">
			<Link to="/" className="Home">Home</Link>
			<ul>
				<CustomLink to="/yuumi">Yuumi</CustomLink>
				<CustomLink to="/">Demo</CustomLink>
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