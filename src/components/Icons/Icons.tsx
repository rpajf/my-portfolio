import React from 'react';
import './Icons.styles.scss';
import classNames from 'classnames';
import iconReact from '../../assets/techs/icons8-react.svg';
import iconNode from '../../assets/techs/icons8-nodejs.svg';
import iconPrisma from '../../assets/techs/icons8-prisma-orm.svg';
import iconSass from '../../assets/techs/icons8-sass.svg';
import iconJest from '../../assets/techs/jest-icon.svg';
import iconTypescript from '../../assets/techs/icons8-typescript.svg';
import { ComponentSize, IconName } from '../../types/';



interface IconsWrapperProps {
	iconName?: IconName
	size?: ComponentSize
	color?: string
}


const IconsWrapper: React.FC<IconsWrapperProps> = ({iconName, size='small', color}) => {
	const iconMapping = {
		'jest': iconJest,
		'node': iconNode,
		'react': iconReact,
		'sass': iconSass,
		'prisma': iconPrisma,
		'typescript': iconTypescript
	};
	
	const chosenIcon = iconName ? iconMapping[iconName] : null;
	return ( 
		<React.Fragment>
			{iconName? (<img className={
				classNames('icon-img', size,{'color' : color === 'dark'})
			} src={chosenIcon!} alt="" />):null}
		</React.Fragment>
	); 
	
};

export default IconsWrapper;