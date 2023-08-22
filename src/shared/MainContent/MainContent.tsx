import React from 'react';
import './MainContent.styles.scss';
import 'rc-tooltip/assets/bootstrap.css';
import { motion } from 'framer-motion';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import { buttonVariants } from '../../consts/framerMotion';
import Tooltip from 'rc-tooltip';
import Button from '../Button';
import CV_URL_ENG from '../../assets/cv/RAPHAEL-CV-ENG.pdf';

interface MainContent {
  title: string;
	headline?: string
  subTitle: string;
}

const MainContent: React.FC<MainContent> = ({ title, subTitle, headline }) => {

	const fadeIn = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 0.5 } },
	};
	const placeholderText = [
		{ type: 'heading1', text: 'Framer Motion' },
		{
			type: 'heading2',
			text: 'Animating responsive text!'
		}
	];
	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025
			}
		}
	};

	
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
	// <div className="content">
	// 	<div className='text-wrapper'>
	// 		<h3 className="headline">{headline}</h3>
	// 		<h2 className="title">{title}</h2>
	// 		<h5 className="subTitle">{subTitle}</h5>
	// 	</div>
	// 	<div className="btns-wrapper">
	// 		<Tooltip
	// 			mouseEnterDelay={0.1}
	// 			mouseLeaveDelay={0.25}
	// 			trigger="hover"
	// 			placement="bottom"
	// 			destroyTooltipOnHide
	// 			overlay={overlay}
	// 		>
	// 			<div className="tooltip-element">Download CV</div>
	// 		</Tooltip>
	// 	</div>
	// </div>
	//
		<motion.div className='initial' initial="hidden" animate="show" variants={fadeIn}>
			<div className="content">
				<div className='text-wrapper'>
					{/* <h3 className="headline-main">{headline}</h3> */}
					{/* <h2 className="title-main">{headline}</h2>
					<h5 className="subtitle-main">{subTitle}</h5> */}
					{/* <motion.div initial='hidden' animate='visible' variants={container}>
						{placeholderText.map((item, index) => {
							console.log({item});
							return <AnimatedText text={item.text} type={item.type}key={index}  />;
						})}
					</motion.div> */}
					<AnimatedText className='title-main' text={title} />
					<AnimatedText className='subtitle-main' text={subTitle} />

				</div>
				<motion.div initial="hidden"
					animate="visible" variants={buttonVariants}>
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
				</motion.div>
			</div>
		</motion.div>
	);
};

export default MainContent;
