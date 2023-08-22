import React from 'react';
import './Initial.styles.scss';
import {motion, AnimatePresence} from 'framer-motion';

interface Props {
  children: React.ReactNode
}

const Initial: React.FC<Props> = ({children}) => {
	
	return (

		<section className='initial'>
			{children}
		</section>
	);
};

export default Initial;