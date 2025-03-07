import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Custom styles

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h3>Menú</h3>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/donantes">Donantes</Link></li>
        <li><Link to="/beneficiarios">Beneficiarios</Link></li>
        <li><Link to="/donaciones">Donaciones</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;