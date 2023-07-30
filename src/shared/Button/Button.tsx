import React from 'react';
import classNames from 'classnames';
import './Button.styles.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isLoading?: boolean;
  children: React.ReactNode | string
	hasBorder?: boolean

}


const Button: React.FC<ButtonProps> = ({onClick, children, hasBorder }) => {
	const [isActive, setIsActive] = React.useState();
	return (
		<button className={classNames('button', {'has-border': hasBorder, 'is-active': isActive} )} onClick={onClick}>
			{children}
		</button>);
};

export default Button;