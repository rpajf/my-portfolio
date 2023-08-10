import React from 'react';
import classNames from 'classnames';
import { useOutsideClick } from '../../hooks/clickOutside';
import './Button.styles.scss';

interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  children: React.ReactNode | string;
  hasBorder?: boolean;
  hasBorderBottom?: boolean;
	hasBackground?: boolean
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	hasBorder = false,
	hasBorderBottom = false,
	hasBackground = false
}) => {
	const [isActive, setIsActive] = React.useState<boolean>(false);
	const handleOutsideClick = React.useCallback(() => {
		if(isActive) setIsActive(false);
	},[isActive]);

	const buttonRef = useOutsideClick<HTMLButtonElement>(handleOutsideClick);
	const handleClick = React.useCallback(
		() => {
			onClick!();
			console.log('clicked');
			setIsActive(!isActive);
		},
		[isActive, onClick],
	);

	return (
		<button
			className={classNames('button', {
				'has-border': hasBorder,
				'is-active': isActive,
				'has-border-bottom': hasBorderBottom,
				'has-background': hasBackground
			})}
			ref={buttonRef}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
