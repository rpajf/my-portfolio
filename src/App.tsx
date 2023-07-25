
import Sidebar from './components/Sidebar';
import MainContent from './shared/MainContent/MainContent';

import Home from './pages/Home';
function App() {
	// const { theme, toggleTheme } = React.useContext(ThemeContext);
	// const {theme, toggleTheme} = useTheme();
	// console.log('theme',theme);
	return (

		<Home>
			<Sidebar/>
			<MainContent title='Hi iam Raphael, welcome to my portfolio' subTitle='Software engineer | fullstack developer'/>
		</Home>

	);
}

export default App;
