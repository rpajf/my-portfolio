import React from 'react';
import './MainContent.styles.scss';
import 'rc-tooltip/assets/bootstrap.css';
// import {noop} from 'lodash';
import Tooltip from 'rc-tooltip';
import Button from '../Button';
import CV_URL_ENG from '../../assets/cv/RAPHAEL-CV-ENG.pdf';

interface MainContent {
  title: string;
  subTitle: string;
}

const MainContent: React.FC<MainContent> = ({ title, subTitle }) => {
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
			<h2 className="title">{title}</h2>
			<h5 className="subTitle">{subTitle}</h5>
			<div className="btns-wrapper">
				<Tooltip
					mouseEnterDelay={0.1} // Delay in seconds for tooltip to show after hover
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
