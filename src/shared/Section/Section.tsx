import React from 'react';
import './Section.styles.scss';

interface SectionProps {
  children?: React.ReactNode
  title: string
}

const Section: React.FC<SectionProps> = ({children, title}) => {
	return (
		<section className='section'>
			<h2 className='section-title'>{title}</h2>
			{children}
		</section>
	);
};

export default Section;