import React, { useEffect, useState } from 'react';
import DataTableComponent from '../components/DataTableComponent';
import { apiService, Donante } from '../services/apiService';

const Donantes: React.FC = () => {
  const [donantes, setDonantes] = useState<Donante[]>([]);

  useEffect(() => {
    const fetchDonantes = async () => {
      const data = await apiService.getDonantes();
      setDonantes(data);
    };
    fetchDonantes();
  }, []);

  const columns = [
    { field: 'id', header: 'ID' },
    { field: 'nombre', header: 'Nombre' },
    { field: 'tipo', header: 'Tipo' },
    { field: 'direccion', header: 'Dirección' },
    { field: 'telefono', header: 'Teléfono' },
  ];

  return (
    <div>
      <h2>Lista de Donantes</h2>
      <DataTableComponent data={donantes} columns={columns} />
    </div>
  );
};

export default Donantes;
