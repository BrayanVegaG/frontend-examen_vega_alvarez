import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Donacion } from '../types/types';

const DonationsTable: React.FC = () => {
  const [donaciones, setDonations] = useState<Donacion[]>([]);

  useEffect(() => {
    const loadDonations = async () => {
      const response = await fetch('http://localhost:3000/donaciones'); // Updated API URL
      const data = await response.json();
      setDonations(data);
    };
    loadDonations();
  }, []);

  return (
    <div className="card">
      <h2>Donaciones</h2>
      <DataTable value={donaciones} paginator rows={10} responsiveLayout="scroll">
        <Column field="id" header="ID" sortable />
        <Column field="descripcion" header="Descripción" sortable />
        <Column field="fecha" header="Fecha" sortable />
        <Column field="donante.nombre" header="Donante" sortable />
        <Column field="beneficiario.nombre" header="Beneficiario" sortable />
      </DataTable>
    </div>
  );
};

export default DonationsTable;