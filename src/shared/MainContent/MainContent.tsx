import React from 'react';
import './MainContent.styles.scss';
import Tooltip from 'rc-tooltip';
import Button from '../Button';
import CV_URL_ENG from '../../assets/cv/RAPHAEL-CV-ENG.pdf';
interface MainContent{
  title:string
	subTitle: string
}




const MainContent: React.FC<MainContent> = ({title, subTitle}) => {
	const overlay = (	<a
		href={CV_URL_ENG}
		download="Example-PDF-document"
		target="_blank"
		rel="noreferrer"
	>
		<Button hasBorder>Download CV</Button>

	</a>); 
	return (
		<div className='content'>
			<h2 className='title'>{title}</h2>
			<h5 className='subTitle'>{subTitle}</h5>
			<div className='btns-wrapper'>
				<Button hasBorder>Projects</Button>
				<Tooltip trigger="hover" placement='bottom'  destroyTooltipOnHide overlay={overlay}> 
					<button>download</button>
				</Tooltip>
			</div>
		</div>
	);
  
  
};

export default MainContent;