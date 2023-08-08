import React from 'react';
import './MainContent.styles.scss';
import 'rc-tooltip/assets/bootstrap.css';
// import {noop} from 'lodash';
import Tooltip from 'rc-tooltip';
import Button from '../Button';
import CV_URL_ENG from '../../assets/cv/RAPHAEL-CV-ENG.pdf';

interface MainContent {
  title: string;
	headline?: string
  subTitle: string;
}

const MainContent: React.FC<MainContent> = ({ title, subTitle, headline }) => {
	const overlay = (
		<div className="tooltip-overlay">
			<a
				href={CV_URL_ENG}
				download="Raphael CV English"
				target="_blank"
				rel="noreferrer"
				className="link"
			>
				<Button hasBorderBottom>English version</Button>
			</a>
			<a
				href={CV_URL_ENG}
				download="Raphael CV Portuguese"
				target="_blank"
				rel="noreferrer"
				className="link"
			>
				<Button hasBorderBottom>Portuguese version</Button>
			</a>
		</div>
	);
	return (
		<div className="content">
			<div className='text-wrapper'>
				<h3 className="headline">{headline}</h3>
				<h2 className="title">{title}</h2>
				<h5 className="subTitle">{subTitle}</h5>
			</div>
			<div className="btns-wrapper">
				<Tooltip
					mouseEnterDelay={0.1}
					mouseLeaveDelay={0.25}
					trigger="hover"
					placement="bottom"
					destroyTooltipOnHide
					overlay={overlay}
				>
					<div className="tooltip-element">Download CV</div>
				</Tooltip>
			</div>
		</div>
	);
};

export default MainContent;
