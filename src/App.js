import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {ThemeContext, ThemeProviderComponent} from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CV from './components/CV';
import './styles/app.css';
import { useContext } from 'react';

function App() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProviderComponent>
          <Navbar />
          <div className={`pages ${!darkMode ? "pages_light" : ""}`}>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/cv" element={<CV />} />
            </Routes>
          </div>
        </ThemeProviderComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
