import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
						alt=''
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My list</span>
				</div>
				<div className='right'>
					<Search className='icon' />
					<span>KID</span>
					<Notifications className='icon' />
					<img
						src='https://user-images.githubusercontent.com/61008063/132121444-fd06db3b-cdb4-46bf-88b0-d21b4157f954.jpg'
						alt=''
					/>
					<div className='profile'>
						<ArrowDropDown className='icon' />
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
