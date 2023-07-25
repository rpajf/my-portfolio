import React from 'react';

// import { Container } from './styles';

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isLoading?: boolean;

}


const Button: React.FC<ButtonProps> = () => {
	return <button></button>;
};

export default Button;