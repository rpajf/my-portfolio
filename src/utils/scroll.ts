import React from 'react';

// export const scrollIntoViewEr = (ref: React.RefObject<HTMLElement>) => {
// 	ref.current?.scrollIntoView({ behavior: 'smooth' });
// };
export function scrollIntoView(
	ref: React.RefObject<HTMLElement>,
	// offset: number
) {
	return () => {
		if (ref.current) {
			const { height } = ref.current.getBoundingClientRect();
			const top = ref.current.getBoundingClientRect().top;
			console.log('top', top, { height });
			console.log('scroll Y', window.scrollY);
			ref.current?.scrollIntoView({ behavior: 'smooth' });
		}
	};
}
