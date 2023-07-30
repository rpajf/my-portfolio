import React from 'react';
import './Home.styles.scss';

import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header/Header';
import Section from '../../shared/Section/Section';


const Home: React.FC = () => {
	return (
		<main className='home'>
			<Header/>
			<div className='home-section'>
				<MainContent title='Welcome to my portfolio, Iam Raphael' subTitle='Software engineer | fullstack developer'/>
				<div className='photo'/>
			</div>
			<Section title='About'>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.</p>
			</Section>
			<Section title='Projects'>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, rem.</p>
			</Section>
		</main>
	);
};

export default Home;