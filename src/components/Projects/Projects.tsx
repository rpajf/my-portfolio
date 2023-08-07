import React from 'react';
import './Projects.style.scss';
import Button from '../../shared/Button/Button';
interface ProjectWrapperProps{

  title: string
  description: string
  link: string
  imageUrl?: string
  tecnologies: string[]
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({title, description, link, tecnologies, imageUrl}) => {
	const navigateToUrl = React.useCallback(() => location.href= link, []);
	return (
		<div className='container'>
			<div className='about'>
				<h2 className='project-title'>{title}</h2>
				<p>{description}</p>
			</div>

			<div className='tecnologies-wrapper'>
				{tecnologies.map((imageUrl) => (
					<img className='icon' key={1} src={`${imageUrl}`}/>
				))}
			</div>
			<Button onClick={navigateToUrl}>View on github</Button>
		</div>
	);
};

export default ProjectWrapper;