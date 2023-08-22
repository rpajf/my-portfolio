import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import './BurgerMenu.styles.scss';
// import { Container } from './styles';


interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void
  children?: React.ReactNode
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({children, isOpen, setIsOpen}) => {
	// const [isOpen, setIsOpen] = React.useState(false);

	const handleOpenMenu = React.useCallback(() => setIsOpen(true),[]);
	console.log({isOpen});
	return (
		<CiMenuBurger onClick={handleOpenMenu} className='burguer-menu'>{isOpen ?(<button>awdasd</button>):'null'}</CiMenuBurger>
	);
};



export default BurgerMenu;