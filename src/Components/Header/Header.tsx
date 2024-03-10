import profilePic from '../../assets/yuumiCircle.png'
import './Header.css'

function Header() {
	return(
		<>
			<h1><img src={profilePic} height='40' className='yooms' alt="Profile Picture" /> Alvin Deng <img src={profilePic} height='40' className='yoomsCounter' alt="Profile Picture" /></h1>
		</>
	);
}

export default Header;