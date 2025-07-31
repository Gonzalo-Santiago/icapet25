import type { Instructor, Sector, InstructorSector } from '@/types';

export const allSectors: Sector[] = [
    // ADMINISTRACIÓN
    { id: 1, campo_formacion: 'ADMINISTRACIÓN', especialidad: 'Relaciones Humanas', curso: 'Autoestima' },
    { id: 2, campo_formacion: 'ADMINISTRACIÓN', especialidad: 'Relaciones Humanas', curso: 'Comunicación Asertiva' },
    { id: 3, campo_formacion: 'ADMINISTRACIÓN', especialidad: 'Administración', curso: 'Habilidades Directivas y Liderazgo' },
    { id: 4, campo_formacion: 'ADMINISTRACIÓN', especialidad: 'Administración de Micro y Pequeñas Empresas', curso: 'Atención al Cliente' },
    { id: 5, campo_formacion: 'ADMINISTRACIÓN', especialidad: 'Administración de Micro y Pequeñas Empresas', curso: 'Marketing y Negociación' },

    // TECNOLOGÍAS DE LA INFORMACIÓN
    { id: 50, campo_formacion: 'TECNOLOGÍAS DE LA INFORMACIÓN', especialidad: 'Informática', curso: 'Excel Básico' },
    { id: 51, campo_formacion: 'TECNOLOGÍAS DE LA INFORMACIÓN', especialidad: 'Informática', curso: 'Excel Intermedio' },
    { id: 52, campo_formacion: 'TECNOLOGÍAS DE LA INFORMACIÓN', especialidad: 'Informática', curso: 'Manejo de Windows e Internet' },
    { id: 53, campo_formacion: 'TECNOLOGÍAS DE LA INFORMACIÓN', especialidad: 'Informática', curso: 'Programación Básica en Lenguaje Python' },
    
    // TURISMO
    { id: 100, campo_formacion: 'TURISMO', especialidad: 'Hotelería', curso: 'Recepción y Atención del Huésped' },
    { id: 101, campo_formacion: 'TURISMO', especialidad: 'Alimentos y Bebidas', curso: 'Atención a Comensales' },
    { id: 102, campo_formacion: 'TURISMO', especialidad: 'Alimentos y Bebidas', curso: 'Cocina Básica' },
    { id: 103, campo_formacion: 'TURISMO', especialidad: 'Alimentos y Bebidas', curso: 'Gastronomía Oaxaqueña' },

    // SALUD
    { id: 150, campo_formacion: 'SALUD', especialidad: 'Salud y Seguridad en el Trabajo', curso: 'Primeros Auxilios' },
    { id: 151, campo_formacion: 'SALUD', especialidad: 'Salud y Seguridad en el Trabajo', curso: 'Protección Civil e Integración de Brigadas' },
];

export const allInstructors: Instructor[] = [
    {
        id: 1,
        nombre: 'Juan',
        apellido_paterno: 'Pérez',
        apellido_materno: 'Gómez',
        telefono: '9511234567',
        email: 'juan.perez@example.com',
        nivel_estudio: 'Licenciatura',
        area_estudio: 'Administración',
        status: 'Formal',
        UDC: 'UDC01',
        residencia: 'Oaxaca de Juárez',
        comentario: 'Instructor con amplia experiencia en cursos administrativos y de desarrollo humano.',
        RFC: 'rfc_juan.pdf',
        CURP: 'curp_juan.pdf',
        cedula: 'cedula_juan.pdf',
        INE: 'ine_juan.pdf',
        fotografia: 'foto_juan.jpg'
    },
    {
        id: 2,
        nombre: 'Maria',
        apellido_paterno: 'López',
        apellido_materno: 'Hernández',
        telefono: '9517654321',
        email: 'maria.lopez@example.com',
        nivel_estudio: 'Ingeniería',
        area_estudio: 'Sistemas Computacionales',
        status: 'Formal',
        UDC: 'UDC02',
        residencia: 'Salina Cruz',
        comentario: 'Especialista en software de ofimática y lenguajes de programación. Apasionada por la enseñanza de la tecnología.',
        RFC: 'rfc_maria.pdf',
        CURP: 'curp_maria.pdf',
        cedula: 'cedula_maria.pdf',
        INE: 'ine_maria.pdf',
        fotografia: 'foto_maria.jpg'
    },
    {
        id: 3,
        nombre: 'Carlos',
        apellido_paterno: 'Martínez',
        apellido_materno: 'García',
        telefono: '9518889900',
        email: 'carlos.martinez@example.com',
        nivel_estudio: 'Licenciatura',
        area_estudio: 'Turismo y Gastronomía',
        status: 'Informal',
        UDC: 'UDC03',
        residencia: 'Huatulco',
        comentario: 'Chef profesional y experto en hospitalidad, enfocado en la riqueza de la cocina oaxaqueña.',
        RFC: 'rfc_carlos.pdf',
        CURP: 'curp_carlos.pdf',
        cedula: 'cedula_carlos.pdf',
        INE: 'ine_carlos.pdf',
        fotografia: 'foto_carlos.jpg'
    },
    {
        id: 4,
        nombre: 'Ana',
        apellido_paterno: 'Ramírez',
        apellido_materno: 'Cruz',
        telefono: '9513334455',
        email: 'ana.ramirez@example.com',
        nivel_estudio: 'Técnico Superior',
        area_estudio: 'Enfermería',
        status: 'Formal',
        UDC: 'UDC01',
        residencia: 'Oaxaca de Juárez',
        comentario: 'Paramédico certificada con experiencia en respuesta a emergencias y capacitación de brigadas.',
        RFC: 'rfc_ana.pdf',
        CURP: 'curp_ana.pdf',
        cedula: 'cedula_ana.pdf',
        INE: 'ine_ana.pdf',
        fotografia: 'foto_ana.jpg'
    }
];

export const instructorSectors: InstructorSector[] = [
    // Juan Pérez (Administración)
    { id: 1, id_instructor: 1, id_sector: 1 },
    { id: 2, id_instructor: 1, id_sector: 2 },
    { id: 3, id_instructor: 1, id_sector: 3 },
    { id: 4, id_instructor: 1, id_sector: 4 },

    // Maria López (Tecnología)
    { id: 5, id_instructor: 2, id_sector: 50 },
    { id: 6, id_instructor: 2, id_sector: 51 },
    { id: 7, id_instructor: 2, id_sector: 52 },
    { id: 8, id_instructor: 2, id_sector: 53 },
    { id: 9, id_instructor: 2, id_sector: 3 }, // También puede dar liderazgo

    // Carlos Martínez (Turismo)
    { id: 10, id_instructor: 3, id_sector: 100 },
    { id: 11, id_instructor: 3, id_sector: 101 },
    { id: 12, id_instructor: 3, id_sector: 102 },
    { id: 13, id_instructor: 3, id_sector: 103 },
    { id: 14, id_instructor: 3, id_sector: 4 }, // También sabe de atención al cliente

    // Ana Ramírez (Salud)
    { id: 15, id_instructor: 4, id_sector: 150 },
    { id: 16, id_instructor: 4, id_sector: 151 },
];

// Helper functions
export const getUniqueCampos = () => {
    const campos = allSectors.map(s => s.campo_formacion);
    return [...new Set(campos)].sort();
}

export const getUniqueEspecialidades = (campo?: string) => {
    const relevantSectors = campo ? allSectors.filter(s => s.campo_formacion === campo) : allSectors;
    const especialidades = relevantSectors.map(s => s.especialidad);
    return [...new Set(especialidades)].sort();
}

export const getUniqueCursos = (especialidad?: string | null, campo?: string) => {
    let relevantSectors = allSectors;
    if (especialidad) {
        relevantSectors = relevantSectors.filter(s => s.especialidad === especialidad);
    } else if (campo) {
        relevantSectors = relevantSectors.filter(s => s.campo_formacion === campo);
    }
    const cursos = relevantSectors.map(s => s.curso);
    return [...new Set(cursos)].sort();
}

export const getSectorsForInstructor = (instructorId: number): Sector[] => {
    const sectorIds = instructorSectors
        .filter(is => is.id_instructor === instructorId)
        .map(is => is.id_sector);
    
    return allSectors.filter(s => sectorIds.includes(s.id));
}
