import profilePic from '../assets/alvinwom.jpg'

function Header() {
	return(
		<>
			<h1><img alt="Profile Picture" src={profilePic} width='45'></img> Alvin Deng</h1>
		</>
	);
}

export default Header;