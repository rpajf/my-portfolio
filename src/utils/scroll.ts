import React from 'react';

export function scrollIntoView(
	ref: React.RefObject<HTMLElement>,
	offset:	 number = 0
) {
	return () => {
		if (ref.current) {
			const top =
				ref.current.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	};
}
