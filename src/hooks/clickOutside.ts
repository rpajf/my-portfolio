import React from 'react';

export const useOutsideClick = <T extends HTMLElement>(
	callback: (event: MouseEvent) => void
) => {
	const ref = React.useRef<T | null>(null);

	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback(event);
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback]);

	return ref;
};
