import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Donante, Beneficiario, Donacion } from '../types/types';
import { fetchAPI } from '../services/api';

const Reports: React.FC = () => {
  const [donors, setDonors] = useState<Donante[]>([]);
  const [beneficiaries, setBeneficiaries] = useState<Beneficiario[]>([]);
  const [donations, setDonations] = useState<Donacion[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const donorsData = await fetchAPI('/donantes');
      setDonors(donorsData);

      const beneficiariesData = await fetchAPI('/beneficiarios');
      setBeneficiaries(beneficiariesData);

      const donationsData = await fetchAPI('/donaciones');
      setDonations(donationsData);
    };
    loadData();
  }, []);

  const donorChartData = {
    labels: donors.map(donor => donor.nombre),
    datasets: [
      {
        label: 'Donaciones por Donante',
        data: donors.map(donor => donor.donaciones.length),
        backgroundColor: '#42A5F5'
      }
    ]
  };

  const beneficiaryChartData = {
    labels: beneficiaries.map(beneficiary => beneficiary.nombre),
    datasets: [
      {
        label: 'Donaciones por Beneficiario',
        data: beneficiaries.map(beneficiary => beneficiary.donaciones.length),
        backgroundColor: '#66BB6A'
      }
    ]
  };

  return (
    <div>
      <h2>Reportes</h2>
      <div className="p-grid">
        <div className="p-col-12 p-md-6">
          <Chart type="bar" data={donorChartData} />
        </div>
        <div className="p-col-12 p-md-6">
          <Chart type="bar" data={beneficiaryChartData} />
        </div>
      </div>
      <h3>Donantes</h3>
      <DataTable value={donors}>
        <Column field="nombre" header="Nombre" />
        <Column field="tipo" header="Tipo" />
        <Column field="direccion" header="Dirección" />
        <Column field="telefono" header="Teléfono" />
      </DataTable>
      <h3>Beneficiarios</h3>
      <DataTable value={beneficiaries}>
        <Column field="nombre" header="Nombre" />
        <Column field="tipo" header="Tipo" />
        <Column field="direccion" header="Dirección" />
        <Column field="contacto" header="Contacto" />
      </DataTable>
      <h3>Donaciones</h3>
      <DataTable value={donations}>
        <Column field="descripcion" header="Descripción" />
        <Column field="fecha" header="Fecha" />
        <Column field="donante.nombre" header="Donante" />
        <Column field="beneficiario.nombre" header="Beneficiario" />
      </DataTable>
    </div>
  );
};

export default Reports;
