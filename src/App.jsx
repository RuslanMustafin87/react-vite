

import { ThemeProvider  } from './ThemeContext.jsx';
import { BoxCenter } from './BoxCenter.jsx';

import "./App.scss";

function App() {

  return (
    <>
      <div className="container">
        <ThemeProvider>
          <BoxCenter />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
