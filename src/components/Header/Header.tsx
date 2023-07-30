import React from 'react';
import Button from '../../shared/Button/Button';
import './Header.styles.scss';



const Header: React.FC = () => {
	return (
		<div className='container'>
			<div className='inner'>
				<Button>About</Button>
				<Button>Projects</Button>
				<Button>Skills</Button>
			</div>
		</div>
	);
};

export default Header;