import profilePic from '../../assets/yuumiCircle.png'
import './Header.css'

export default function Header() {
	return(
		<>
			<h1><img src={profilePic} height='40' className='yooms' alt="Profile Picture" /> Alvin Deng <img src={profilePic} height='40' className='yooms counter' alt="Profile Picture" /></h1>
		</>
	);
}