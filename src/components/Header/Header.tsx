import React from 'react';
import Button from '../../shared/Button/Button';
import classNames from 'classnames';
import './Header.styles.scss';

const Header: React.FC = () => {
	const [activeButton, setActiveButton] = React.useState<string | null>(null);
	const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName);
		console.log('click');
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = React.useCallback(() => {
		if (window.scrollY > 50) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	},[window.scrollY]);
	

	return (
		<div className={classNames('container', {'is-scrolling': isScrolled})}>
			<Button onClick={() => handleButtonClick('About')} hasBorderBottom hasBorder={activeButton === 'About'}>About</Button>
			<Button onClick={() => handleButtonClick('Projects')} hasBorderBottom hasBorder={activeButton === 'Projects'}>Projects</Button>
			<Button onClick={() => handleButtonClick('Skills')} hasBorderBottom hasBorder={activeButton === 'Skills'}>Skills</Button>
		</div>
	);
};

export default Header;