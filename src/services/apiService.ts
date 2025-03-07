const API_URL = import.meta.env.VITE_API_URL; // Use environment variable

export interface Donante {
  id: number;
  nombre: string;
  tipo: string;
  direccion: string;
  telefono: string;
}

export interface Beneficiario {
  id: number;
  nombre: string;
  tipo: string;
  direccion: string;
  contacto: string;
}

export interface Donacion {
  id: number;
  descripcion: string;
  fecha: string;
  donante: Donante;
  beneficiario: Beneficiario;
}

export const apiService = {
  getDonantes: async (): Promise<Donante[]> => {
    const response = await fetch(`${API_URL}/donantes`);
    return response.json();
  },

  getBeneficiarios: async (): Promise<Beneficiario[]> => {
    const response = await fetch(`${API_URL}/beneficiarios`);
    return response.json();
  },

  getDonaciones: async (): Promise<Donacion[]> => {
    const response = await fetch(`${API_URL}/donaciones`);
    return response.json();
  },
};
