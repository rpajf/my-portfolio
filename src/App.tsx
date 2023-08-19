import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
	// const { theme, toggleTheme } = React.useContext(ThemeContext);
	// const {theme, toggleTheme} = useTheme();
	// console.log('theme',theme);
	// return <Home />;
	return (<React.Fragment>
		<Home/>
		<Footer/>
	</React.Fragment>);

}

export default App;
