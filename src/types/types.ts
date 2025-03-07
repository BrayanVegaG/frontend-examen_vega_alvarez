export interface Donante {
    id: number;
    nombre: string;
    direccion: string;
    tipo: string; // Ejemplo: Supermercado, Restaurante, Particular
    telefono: string;
    donaciones: Donacion[];
}

export interface Beneficiario {
    id: number;
    nombre: string;
    direccion: string;
    tipo: string; // Ejemplo: ONG, Comedor Comunitario
    contacto: string;
    donaciones: Donacion[];
}

export interface Donacion {
    id: number;
    descripcion: string; // Ejemplo: 10 kg de arroz
    fecha: Date;
    donante: Donante;
    beneficiario: Beneficiario;
}