import { ThemeProvider } from './ThemeContext.jsx'
import { BoxCenter } from './BoxCenter.jsx'

import './App.scss'

function App() {
	return (
		<>
			<ThemeProvider>
				<div className="container">
					<BoxCenter />
				</div>
			</ThemeProvider>
		</>
	)
}

export default App
