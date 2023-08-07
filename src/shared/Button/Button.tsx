import React from 'react';
import classNames from 'classnames';
import './Button.styles.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isLoading?: boolean;
  children: React.ReactNode | string;
  hasBorder?: boolean;
  hasBorderBottom?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	hasBorder = false,
	hasBorderBottom = false,
}) => {
	const [isActive, setIsActive] = React.useState<boolean>(false);

	const handleClick = React.useCallback(
		(e: React.MouseEvent) => {
      onClick!(e);
      setIsActive(!isActive);
		},
		[isActive],
	);

	return (
		<button
			className={classNames('button', {
				'has-border': hasBorder,
				'is-active': isActive,
				'has-border-bottom': hasBorderBottom,
			})}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
