import React from 'react';
import './Projects.style.scss';
import Button from '../../shared/Button/Button';
interface ProjectsProps{

  title: string
  description: string
  link: string
  imageUrl?: string
  tecnologies: string[]
}

const Projects: React.FC<ProjectsProps> = ({title, description, link, tecnologies, imageUrl}) => {
	return (
		<div className='content'>
			<div className='about'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			<div>{}</div>
			<Button>View on github</Button>
		</div>
	);
};

export default Projects;