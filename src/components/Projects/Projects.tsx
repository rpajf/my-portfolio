import React from 'react';
import './Projects.style.scss';
import Button from '../../shared/Button/Button';
interface ProjectWrapperProps{
  title: string
  description: string
  githubLink: string
  imageUrl?: string
	alt?: string
  tecnologies: string[]
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({title, description, githubLink, tecnologies, imageUrl, alt}) => {
	const navigateToUrl = React.useCallback(() => location.href= githubLink, []);
	return (
		<div className='container'>
		
			<div className='about'>
				<h2 className='project-title'>{title}</h2>
				<div className='project-section'>
					<p className='description'>{description}</p>
					<img src={imageUrl} alt={alt} className='project-img'/>
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