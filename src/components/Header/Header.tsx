import React from 'react';
import Button from '../../shared/Button/Button';
import classNames from 'classnames';
import {scrollIntoView} from '../../utils/scroll';
import './Header.styles.scss';

interface HeaderProps {
	scrollToElement: {
		scrollIntoProjects: () => void;
		scrollIntoAbout: () => void;
	};
}

const Header: React.FC<HeaderProps> = ({scrollToElement}) => {
	const [activeButton, setActiveButton] = React.useState<string | null>(null);
	const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

	const handleButtonClick = React.useCallback((buttonName: string) => {
		if(buttonName=== 'About'){
			scrollToElement.scrollIntoAbout();
			setActiveButton(buttonName);
		}
		
		if(buttonName=== 'Projects'){
			scrollToElement.scrollIntoProjects();
			setActiveButton(buttonName);
		}
	},[scrollToElement]);

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
	}, [window.scrollY]);

	// const scrollToSection = React.useMemo(() => {
	// 	return {
	// 		scrollIntoProjects: scrollIntoView(projectsSectionRef, 50), // Example offset value
	// 		scrollIntoAbout: scrollIntoView(aboutSectionRef, 0)
	// 	};
	// }, [projectsSectionRef, aboutSectionRef]);
	return (
		<div className={classNames('header-container', { 'is-scrolling': isScrolled })}>
			<Button
				onClick={() => handleButtonClick('About')}
				hasBorderBottom
				hasBorder={activeButton === 'About'}
			>
        About
			</Button>
			<Button
				onClick={() => handleButtonClick('Projects')}
				hasBorderBottom
				hasBorder={activeButton === 'Projects'}
			>
        Projects
			</Button>
			<Button
				onClick={() => {}}
				hasBorderBottom
				hasBorder={activeButton === 'Skills'}
			>
        Skills
			</Button>
		</div>
	);
};

export default Header;
