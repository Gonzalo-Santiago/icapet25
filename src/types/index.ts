export interface Sector {
    id: number;
    campo_formacion: string;
    especialidad: string;
    curso: string;
}

export interface Instructor {
    id: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    RFC?: any;
    CEDULA?: any;
    INE?: any;
    FOTOGRAFIA?: any;
    CURP?: any;
    telefono: string;
    email: string;
    nivel_estudio: string;
    area_estudio: string;
    status: 'Formal' | 'Informal';
    UDC: string;
    residencia: string;
    comentario?: string;
}

export interface InstructorSector {
    id: number;
    id_instructor: number;
    id_sector: number;
}
