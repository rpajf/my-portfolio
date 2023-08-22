import React from 'react';
import './Home.styles.scss';
import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header';
import Initial from '../../components/Initial';
import iconreact from '../../assets/techs/icons8-react.svg';
import iconnode from '../../assets/techs/icons8-nodejs.svg';
import iconprisma from '../../assets/techs/icons8-react.svg';
import nodelibgif from '../../assets/gifs/node-router-demo.gif';
import IconsWrapper from '../../components/Icons';
import { scrollIntoView } from '../../utils/scroll';
import { nodeRouterDescription, nodeRouterImgAlt } from '../../consts/projectsInfo';
import Section from '../../shared/Section';
import ProjectWrapper from '../../components/Projects';

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
		<main>
			<Initial>
				<MainContent
					title="Raphael Portela"
					subTitle="Software engineer | fullstack developer"
				/>
			</Initial>
			<section className="home">
				{/* <Header scrollToElement={scrollToSection}/> */}
				<IconsWrapper size='medium' color='dark'/>
				<section className="home-section">
			
					<div className="photo" />
				</section>
				<Section title="About me" ref={aboutSectionRef}>
					<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
					</p>
				</Section>
				<Section title="Projects" ref={projectsSectionRef}>

					<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} githubLink="https://github.com/rpajf/http-node-routing" imageUrl={nodelibgif} alt={nodeRouterImgAlt}/>
					<ProjectWrapper title='TMDB Movies' description={`${nodeRouterDescription}`} tecnologies={techlinks} githubLink="https://github.com/rpajf/http-node-routing"  alt={nodeRouterImgAlt}/>

				</Section>
				<Section title="Technologies" ref={aboutSectionRef}>
					<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
					</p>
				</Section>
				{/* <Footer/> */}

			</section>
		</main>
	);
};

export default Home;
