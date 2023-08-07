import React from 'react';

import './CustomTooltip.styles.scss';

type Trigger = 'hover' | 'click';

const CustomTooltip: React.FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	// const trigger =
	// const visible =
	const toolTipRef = React.useRef();
	const handleMouseEnter = React.useCallback(() => {
		setIsActive(true);
	}, []);
	const handleMouseLeave = React.useCallback(() => {
		setIsActive(false);
	}, []);

	const overlay = React.useMemo(
		() =>
			({ children }: { children: JSX.Element }) => {
				return {
					visible: () => <React.Fragment>{children}</React.Fragment>,
				};
			},
		[],
	);

	return <div onMouseEnter={handleMouseEnter}>{}</div>;
};

export default CustomTooltip;
