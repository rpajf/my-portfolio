import React from 'react';
import './Home.styles.scss';
// import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../shared/MainContent/MainContent';
import Header from '../../components/Header/Header';
// interface HomeProps{
//   children: React.ReactNode[]
// }

const Home: React.FC = () => {
	return (
		<main className='home'>
			<Header/>
			{/* <Sidebar/> */}
			<section className='home-section'>
				<MainContent title='Welcome to my portfolio, Iam Raphael' subTitle='Software engineer | fullstack developer'/>
				<div className='photo'/>
			</section>
		</main>
	);
};

export default Home;