import React from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
  theme: Theme;
  toggleTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
	undefined
);
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>('light');

	React.useEffect(() => {
		document.documentElement.className = `${theme}-theme`;
	}, [theme]);
  
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
