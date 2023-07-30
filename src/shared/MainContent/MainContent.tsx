import React from 'react';
import './MainContent.styles.scss';
import Button from '../Button';

interface MainContent{
  title:string
	subTitle: string
}

const MainContent: React.FC<MainContent> = ({title, subTitle}) => {
	return (
		<div className='content'>
			<h2 className='title'>{title}</h2>
			<Button>Projects</Button>
			<Button>Skills</Button>
			<h5 className='subTitle'>{subTitle}</h5>
		</div>
	);
  
  
};

export default MainContent;