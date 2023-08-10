import React from 'react';
import './Home.styles.scss';
import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header';
import iconreact from '../../assets/techs/icons8-react.svg';
import iconnode from '../../assets/techs/icons8-nodejs.svg';
import iconprisma from '../../assets/techs/icons8-react.svg';
import nodelibgif from '../../assets/gifs/node-router-demo.gif';
import Button from '../../shared/Button/Button';

import { scrollIntoView } from '../../utils/scroll';
import { nodeRouterDescription, nodeRouterImgAlt } from '../../consts/projectsInfo';
import Section from '../../shared/Section';
import ProjectWrapper from '../../components/Projects';
// https://fascinating-monstera-ab9528.netlify.app/

const Home: React.FC = () => {
	const techlinks = [
		iconreact,
		iconnode,
		iconprisma
	];
	
	const projectsSectionRef = React.useRef<HTMLDivElement>(null);
	const aboutSectionRef = React.useRef<HTMLDivElement>(null);

	const scrollToSection = React.useMemo(() => {
		console.log('test home');

		return {
			scrollIntoProjects: scrollIntoView(projectsSectionRef),
			scrollIntoAbout: scrollIntoView(aboutSectionRef)
		};
	}, [projectsSectionRef, aboutSectionRef]);
	return (
		<main className="home">
			<Header scrollToElement={scrollToSection}/>
	
			<section className="home-section">
				<MainContent
					headline="Hello, my name is Raphael"
					title="welcome to my portfolio"
					subTitle="Software engineer | fullstack developer"
				/>
				<div className="photo" />
			</section>
			<Section title="About" ref={aboutSectionRef}>
				<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
				</p>
			</Section>
			<Section title="Projects" ref={projectsSectionRef}>
				<div className='category'>
					<Button  hasBorderBottom onClick={() => {}}>Frontend</Button>
					<Button  hasBorderBottom onClick={() => {}}>Backend</Button>

				</div>
				<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} link="https://github.com/rpajf/http-node-routing" imageUrl={nodelibgif} alt={nodeRouterImgAlt}/>
				<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} link="https://github.com/rpajf/http-node-routing"/>
			</Section>
			<Section title="Technologies" ref={aboutSectionRef}>
				<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
				</p>
			</Section>
		</main>
	);
};

export default Home;
