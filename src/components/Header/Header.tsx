import React from 'react';
import Button from '../../shared/Button/Button';
import './Header.styles.scss';



const Header: React.FC = () => {
	const [isActive, setIsActive] = React.useState<boolean>(false);
	return (
		<div className='container'>
			<Button onClick={()=>console.log('click')}>About</Button>
			<Button onClick={()=>console.log('click')}>Projects</Button>
			<Button onClick={()=>console.log('click')}>Skills</Button>
		</div>
	);
};

export default Header;