import React from 'react';
import './Home.styles.scss';
import Button from '../../shared/Button/Button';
import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header';
import iconreact from '../../assets/techs/icons8-react.svg';
import iconnode from '../../assets/techs/icons8-nodejs.svg';
import iconprisma from '../../assets/techs/icons8-react.svg';
import { scrollIntoView } from '../../utils/scroll';
import { nodeRouterDescription } from '../../consts/projectDescriptions';
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
			{/* <Button onClick={() => console.log('Button was clicked!')}>
  Click Me
			</Button> */}
			{/* <button onClick={() => scrollIntoView(aboutSectionRef)}>asd</button> */}
			<Section title="About" ref={aboutSectionRef}>
				<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
				</p>
			</Section>
			<Section title="Projects" ref={projectsSectionRef}>
				<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} link="https://github.com/rpajf/http-node-routing"/>
				<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} link="https://github.com/rpajf/http-node-routing"/>
			</Section>
		</main>
	);
};

export default Home;
