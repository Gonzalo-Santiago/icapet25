"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import {
  allInstructors,
  allSectors,
  instructorSectors,
  getUniqueCampos,
  getUniqueEspecialidades,
  getUniqueCursos,
  getSectorsForInstructor,
} from "@/lib/data";
import type { Instructor, Sector } from "@/types";
import { InstructorFilters } from "@/components/instructor-filters";
import { InstructorList } from "@/components/instructor-list";
import { InstructorDetails } from "@/components/instructor-details";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function Home() {
  const [filters, setFilters] = useState({
    campo: "",
    especialidad: "",
    curso: "",
    search: "",
  });

  const [selectedInstructorId, setSelectedInstructorId] = useState<number | null>(null);

  const campos = useMemo(() => getUniqueCampos(), []);
  
  const especialidades = useMemo(() => {
    if (!filters.campo) return getUniqueEspecialidades();
    return getUniqueEspecialidades(filters.campo);
  }, [filters.campo]);

  const cursos = useMemo(() => {
    if (!filters.especialidad) return getUniqueCursos(null, filters.campo || undefined);
    return getUniqueCursos(filters.especialidad);
  }, [filters.especialidad, filters.campo]);

  const handleFilterChange = (filterName: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [filterName]: value };
      if (filterName === "campo") {
        newFilters.especialidad = "";
        newFilters.curso = "";
      }
      if (filterName === "especialidad") {
        newFilters.curso = "";
      }
      return newFilters;
    });
    setSelectedInstructorId(null);
  };
  
  const filteredInstructors = useMemo(() => {
    let instructors = allInstructors;

    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        instructors = instructors.filter(i => 
            `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno}`.toLowerCase().includes(searchTerm)
        );
    }
    
    if (!filters.campo && !filters.especialidad && !filters.curso) {
        return instructors;
    }

    const filteredSectorIds = allSectors
      .filter(sector => 
        (!filters.campo || sector.campo_formacion === filters.campo) &&
        (!filters.especialidad || sector.especialidad === filters.especialidad) &&
        (!filters.curso || sector.curso === filters.curso)
      )
      .map(s => s.id);

    const instructorIds = instructorSectors
      .filter(is => filteredSectorIds.includes(is.id_sector))
      .map(is => is.id_instructor);
      
    const uniqueInstructorIds = [...new Set(instructorIds)];

    return instructors.filter(i => uniqueInstructorIds.includes(i.id));
  }, [filters]);

  const selectedInstructor = useMemo(() => {
    if (!selectedInstructorId) return null;
    return allInstructors.find((i) => i.id === selectedInstructorId) ?? null;
  }, [selectedInstructorId]);

  const selectedInstructorSectors = useMemo(() => {
    if (!selectedInstructor) return [];
    return getSectorsForInstructor(selectedInstructor.id);
  }, [selectedInstructor]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-card border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
            <Building2 className="h-8 w-8 text-primary"/>
            <h1 className="text-2xl font-bold font-headline text-primary-dark">
                ICAPET Instructor Directory
            </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
             <InstructorFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              campos={campos}
              especialidades={especialidades}
              cursos={cursos}
            />
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="xl:col-span-5">
                    <InstructorList 
                        instructors={filteredInstructors}
                        onSelectInstructor={setSelectedInstructorId}
                        selectedInstructorId={selectedInstructorId}
                    />
                </div>
                <div className="xl:col-span-7">
                    <InstructorDetails 
                        instructor={selectedInstructor}
                        sectors={selectedInstructorSectors}
                    />
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
