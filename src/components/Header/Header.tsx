import React from 'react';

import './Header.styles.scss';



const Header: React.FC = () => {
	return (
		<div className='container'>
			<button>About</button>
			<button>Projects</button>

		</div>
	);
};

export default Header;