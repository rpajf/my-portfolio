import React from 'react';
import './Home.styles.scss';

import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header';
import iconreact from '../../assets/techs/icons8-react.svg';
import iconnode from '../../assets/techs/icons8-nodejs.svg';
import iconprisma from '../../assets/techs/icons8-react.svg';
import { nodeRouterDescription } from '../../consts/projectDescriptions';
import Section from '../../shared/Section';
import ProjectWrapper from '../../components/Projects';

const Home: React.FC = () => {
	const techlinks = [
		iconreact,
		iconnode,
		iconprisma
	];
	return (
		<main className="home">
			<Header />
			<section className="home-section">
				<MainContent
					headline="Hello, my name is Raphael"
					title="welcome to my portfolio"
					subTitle="Software engineer | fullstack developer"
				/>
				<div className="photo" />
			</section>

			<Section title="About">
				<p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.
				</p>
			</Section>
			<Section title="Projects">
				<ProjectWrapper title='Node http router' description={`${nodeRouterDescription}`} tecnologies={techlinks} link="https://github.com/rpajf/http-node-routing"/>
			</Section>
		</main>
	);
};

export default Home;
