import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Beneficiario } from '../types/types';

const BeneficiariosTabla: React.FC = () => {
  const [beneficiarios, setBeneficiaries] = useState<Beneficiario[]>([]);

  useEffect(() => {
    const loadBeneficiaries = async () => {
      const response = await fetch('http://localhost:3000/beneficiarios'); // Updated API URL
      const data = await response.json();
      setBeneficiaries(data);
    };
    loadBeneficiaries();
  }, []);

  return (
    <div className="card">
      <h2>Beneficiarios</h2>
      <DataTable value={beneficiarios} paginator rows={10} responsiveLayout="scroll">
        <Column field="id" header="ID" sortable />
        <Column field="nombre" header="Nombre" sortable />
        <Column field="direccion" header="Dirección" sortable />
        <Column field="tipo" header="Tipo" sortable />
        <Column field="contacto" header="Contacto" sortable />
      </DataTable>
    </div>
  );
};

export default BeneficiariosTabla;