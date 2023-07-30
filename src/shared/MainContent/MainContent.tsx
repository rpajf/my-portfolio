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
			<h5 className='subTitle'>{subTitle}</h5>
			<div className='btns-wrapper'>
				<Button hasBorder>Projects</Button>
				<Button hasBorder>Download CV</Button>
			</div>
		</div>
	);
  
  
};

export default MainContent;