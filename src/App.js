import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {ThemeProviderComponent} from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProviderComponent>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </div>
        </ThemeProviderComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
