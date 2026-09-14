import { createContext, useContext, useState, useEffect } from 'react'
import './ThemeContext.scss'
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
	let [theme, setTheme] = useState({
		backGround: '#feeac7',
		color: '#432818',
	})

	useEffect(() => {
		document.querySelector('.container').style.cssText =
			`background-color: ${theme.backGround}; color: ${theme.color}`
	}, [theme])

	const toggleTheme = () => {
		setTheme((prev) =>
			prev.backGround === '#feeac7'
				? { backGround: '#432818', color: '#feeac7' }
				: { backGround: '#feeac7', color: '#432818' }
		)
	}

	return (
		<ThemeContext value={{ theme, toggleTheme }}>
			{children}
			<button className="button-toggle-theme"  onClick={toggleTheme}>
				Push
			</button>
		</ThemeContext>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme должен использоваться внутри ThemeProvider')
	}
	return context
}
