import React from 'react';

import './Button.styles.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isLoading?: boolean;
  children: React.ReactNode | string

}


const Button: React.FC<ButtonProps> = ({onClick, children }) => {
	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>);
};

export default Button;