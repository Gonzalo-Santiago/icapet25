"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookUser, Briefcase, GraduationCap, Search } from "lucide-react";

interface InstructorFiltersProps {
  filters: {
    campo: string;
    especialidad: string;
    curso: string;
    search: string;
  };
  onFilterChange: (filterName: keyof InstructorFiltersProps['filters'], value: string) => void;
  campos: string[];
  especialidades: string[];
  cursos: string[];
}

export function InstructorFilters({ filters, onFilterChange, campos, especialidades, cursos }: InstructorFiltersProps) {
  const handleSelectChange = (filterName: keyof InstructorFiltersProps['filters'], value: string) => {
    onFilterChange(filterName, value === 'all' ? '' : value);
  };
  
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Filtros de Búsqueda</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="search">Buscar por Nombre</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                    id="search" 
                    placeholder="E.g. Juan Pérez..."
                    value={filters.search}
                    onChange={(e) => onFilterChange('search', e.target.value)}
                    className="pl-9"
                />
            </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="campo">Campo de Formación</Label>
          <div className="relative">
            <BookUser className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Select value={filters.campo || 'all'} onValueChange={(value) => handleSelectChange("campo", value)}>
              <SelectTrigger id="campo" className="pl-9">
                <SelectValue placeholder="Todos los campos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los campos</SelectItem>
                {campos.map((campo) => (
                  <SelectItem key={campo} value={campo}>
                    {campo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="especialidad">Especialidad</Label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Select value={filters.especialidad || 'all'} onValueChange={(value) => handleSelectChange("especialidad", value)} disabled={!especialidades.length}>
              <SelectTrigger id="especialidad" className="pl-9">
                <SelectValue placeholder="Todas las especialidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especialidades</SelectItem>
                {especialidades.map((esp) => (
                  <SelectItem key={esp} value={esp}>
                    {esp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="curso">Curso</Label>
           <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Select value={filters.curso || 'all'} onValueChange={(value) => handleSelectChange("curso", value)} disabled={!cursos.length}>
              <SelectTrigger id="curso" className="pl-9">
                <SelectValue placeholder="Todos los cursos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los cursos</SelectItem>
                {cursos.map((curso) => (
                  <SelectItem key={curso} value={curso}>
                    {curso}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
