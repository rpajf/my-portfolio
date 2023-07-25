import React from 'react';
import './MainContent.styles.scss';

interface MainContent{
  title:string
	subTitle: string
}

const MainContent: React.FC<MainContent> = ({title, subTitle}) => {
	return (
		<div className='content'>
			<h2 className='title'>{title}</h2>
			<h5 className='subTitle'>{subTitle}</h5>
		</div>
	);
  
  
};

export default MainContent;