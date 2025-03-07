import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Donante } from '../types/types';

const DonadorTable: React.FC = () => {
  const [donadores, setDonors] = useState<Donante[]>([]);

  useEffect(() => {
    const loadDonors = async () => {
      const response = await fetch('http://localhost:3000/donantes'); // Updated API URL
      const data = await response.json();
      setDonors(data);
    };
    loadDonors();
  }, []);

  return (
    <div className="card">
      <h2>Donantes</h2>
      <DataTable value={donadores} paginator rows={10} responsiveLayout="scroll">
        <Column field="id" header="ID" sortable />
        <Column field="nombre" header="Nombre" sortable />
        <Column field="direccion" header="Dirección" sortable />
        <Column field="tipo" header="Tipo" sortable />
        <Column field="telefono" header="Teléfono" sortable />
      </DataTable>
    </div>
  );
};

export default DonadorTable;