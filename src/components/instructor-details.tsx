"use client";

import type { Instructor, Sector } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import { Mail, Phone, GraduationCap, MapPin, Download, Briefcase } from "lucide-react";

interface InstructorDetailsProps {
  instructor: Instructor | null;
  sectors: Sector[];
}

export function InstructorDetails({ instructor, sectors }: InstructorDetailsProps) {
  if (!instructor) {
    return (
      <Card className="sticky top-20 flex h-[calc(100vh-12rem)] items-center justify-center">
        <div className="text-center text-muted-foreground">
          <GraduationCap className="mx-auto h-12 w-12" />
          <p className="mt-4">Seleccione un instructor para ver sus detalles</p>
        </div>
      </Card>
    );
  }

  const initials = `${instructor.nombre[0]}${instructor.apellido_paterno[0]}`;
  const fullName = `${instructor.nombre} ${instructor.apellido_paterno} ${instructor.apellido_materno}`;

  const groupedSectors = sectors.reduce((acc, sector) => {
    const { campo_formacion, especialidad } = sector;
    if (!acc[campo_formacion]) {
      acc[campo_formacion] = {};
    }
    if (!acc[campo_formacion][especialidad]) {
      acc[campo_formacion][especialidad] = [];
    }
    acc[campo_formacion][especialidad].push(sector);
    return acc;
  }, {} as Record<string, Record<string, Sector[]>>);

  const handleDownload = (fileName?: string) => {
    if(!fileName) return;
    // In a real app, this would trigger a file download.
    // For this prototype, we'll just log to the console.
    alert(`Iniciando descarga de: ${fileName}`);
  };

  return (
    <Card className="sticky top-20">
      <ScrollArea className="h-[calc(100vh-8.5rem)]">
        <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={`https://placehold.co/200x200.png?text=${initials}`} data-ai-hint="professional headshot" alt={fullName} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-2xl">{fullName}</CardTitle>
            <CardDescription>{instructor.area_estudio}</CardDescription>
            <Badge variant={instructor.status === 'Formal' ? 'default' : 'secondary'} className="mt-2">{instructor.status}</Badge>
        </CardHeader>

        <CardContent className="px-6 space-y-6">
            <div className="space-y-4">
                <h4 className="font-semibold">Información Académica</h4>
                 <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span><span className="font-medium">Nivel:</span> {instructor.nivel_estudio}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span><span className="font-medium">Área:</span> {instructor.area_estudio}</span>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-semibold">Información de Contacto</h4>
                <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${instructor.email}`} className="text-primary hover:underline">{instructor.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{instructor.telefono}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{instructor.residencia}</span>
                </div>
            </div>

             <div className="space-y-4">
                <h4 className="font-semibold">Documentación</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(instructor.fotografia)}>
                        <Download /> Fotografía
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(instructor.INE)}>
                        <Download /> INE
                    </Button>
                     <Button variant="outline" size="sm" onClick={() => handleDownload(instructor.cedula)}>
                        <Download /> Cédula
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(instructor.RFC)}>
                        <Download /> RFC
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(instructor.CURP)}>
                        <Download /> CURP
                    </Button>
                </div>
            </div>


             {instructor.comentario && (
                <div className="space-y-2">
                    <h4 className="font-semibold">Comentarios</h4>
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
                        {instructor.comentario}
                    </p>
                </div>
             )}

            <div className="space-y-2">
                <h4 className="font-semibold">Cursos que imparte</h4>
                <Accordion type="multiple" className="w-full">
                    {Object.entries(groupedSectors).map(([campo, especialidades]) => (
                        <AccordionItem value={campo} key={campo}>
                            <AccordionTrigger className="font-medium">{campo}</AccordionTrigger>
                            <AccordionContent>
                                <Accordion type="multiple" className="w-full">
                                {Object.entries(especialidades).map(([especialidad, cursos]) => (
                                    <AccordionItem value={especialidad} key={especialidad}>
                                        <AccordionTrigger className="text-sm pl-4">{especialidad}</AccordionTrigger>
                                        <AccordionContent className="pl-8">
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                {cursos.map(curso => <li key={curso.id}>{curso.curso}</li>)}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
