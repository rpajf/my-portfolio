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
				<div className='project-section'>
					<p className='description'>{description}</p>

					<img src="" alt="" className='project-img'/>
				</div>
			</div>
			<div className='footer'>
				<div className='tecnologies-wrapper'>
					{tecnologies.map((imageUrl) => (
						<img className='icon' key={1} src={`${imageUrl}`}/>
					))}
				</div>
				<Button hasBackground onClick={navigateToUrl}>View on github</Button>

			</div>
	
		</div>
	);
};

export default ProjectWrapper;