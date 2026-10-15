import { ThemeProvider } from './ThemeContext.jsx'
import { BoxCenter } from './BoxCenter.jsx'
import { Sort } from './Sort.jsx'

import './App.scss'

function App() {
	return (
		<>
			<ThemeProvider>
				<div className="container">
					<h1>Hello, World!!!</h1>
					<BoxCenter />
					<Sort />
				</div>
			</ThemeProvider>
		</>
	)
}

export default App
