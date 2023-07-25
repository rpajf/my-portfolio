import React from 'react';

type Theme = 'light' | 'dark';


function useThemeProviderValue(){
	const [theme, setTheme] = React.useState<Theme>('dark');
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return {theme, toggleTheme};
}
type Context = ReturnType<typeof useThemeProviderValue>
const Context = React.createContext<Context | undefined>(undefined);
const ThemeProvider = (props: React.PropsWithChildren) => {

	const {theme, toggleTheme} = useThemeProviderValue();

	React.useLayoutEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	return (
		<Context.Provider value={{theme, toggleTheme}}{...props}/>
	);
};

export {ThemeProvider};
export function useTheme() {
	const context = React.useContext(Context);
	if (context === undefined) {
		throw new Error('useContext must be used within a Provider');
	}
	return context;
}
