import React from 'react';
import './Home.styles.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainContent from '../../shared/MainContent/MainContent';
// interface HomeProps{
//   children: React.ReactNode[]
// }

const Home: React.FC = () => {
	return (
		<main className='home'>
			<Sidebar/>
			<section className='home-section'>
				<MainContent title='Hi iam Raphael, welcome to my portfolio' subTitle='Software engineer | fullstack developer'/>
				<div className='photo'/>
				{/* <img className='photo2' src="../../assets/travel.svg" alt="" /> */}
			</section>
		</main>) ;
};

export default Home;