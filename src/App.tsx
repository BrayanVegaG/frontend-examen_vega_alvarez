import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Donantes from './pages/Donantes';
import Beneficiarios from './pages/Beneficiarios';
import Donaciones from './pages/Donaciones';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos de PrimeReact
import 'primeicons/primeicons.css'; // Iconos
import './App.css'; // Custom styles

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/donantes" element={<Donantes />} />
            <Route path="/beneficiarios" element={<Beneficiarios />} />
            <Route path="/donaciones" element={<Donaciones />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;