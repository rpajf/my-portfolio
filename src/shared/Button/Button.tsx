import React from 'react';
import classNames from 'classnames';
import { useOutsideClick } from '../../hooks/clickOutside';
import { ComponentSize } from '../../types/types';
import './Button.styles.scss';


interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  children: React.ReactNode | string;
  hasBorder?: boolean;
  hasBorderBottom?: boolean;
	hasBackground?: boolean
	isActiveByDefault?: boolean
	size?: ComponentSize 
}
const STYLE_NAMESPACE = 'button';

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	hasBorder = false,
	hasBorderBottom = false,
	hasBackground = false,
	isActiveByDefault = false,
	size='medium'
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
			className={classNames('button', 
			
				STYLE_NAMESPACE,
				`${STYLE_NAMESPACE}-${size}`,
				{
					'has-border': hasBorder,
					'is-active': isActive && isActiveByDefault,
					'has-border-bottom': hasBorderBottom,
					'has-background': hasBackground,
				}
			)}
	
			ref={buttonRef}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
