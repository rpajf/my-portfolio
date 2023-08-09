import React from 'react';

// export const scrollIntoViewEr = (ref: React.RefObject<HTMLElement>) => {
// 	ref.current?.scrollIntoView({ behavior: 'smooth' });
// };
export function scrollIntoView(ref: React.RefObject<HTMLElement>) {
	return () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
}
