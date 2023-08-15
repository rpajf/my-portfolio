import React from 'react';

import './Section.styles.scss';

interface SectionProps {
  children?: React.ReactNode;
  title: string;
	hasFooter?: boolean

}


const Section= React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const {children, title, hasFooter} = props;
	return (
		<section className="section" ref={ref}>
			<h2 className="section-title">{title}</h2>
			{children}
		</section>
	);
});

Section.displayName = 'Section';

export default Section;
