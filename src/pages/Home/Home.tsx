import React from 'react';
import './Home.styles.scss';

interface HomeProps{
  children: React.ReactNode[]
}

const Home: React.FC<HomeProps> = ({children}) => {
	return (
		<main className='home'>
			{children}
		</main>) ;
};

export default Home;