"use client";

import type { Instructor } from "@/types";
import { InstructorCard } from "./instructor-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface InstructorListProps {
  instructors: Instructor[];
  onSelectInstructor: (id: number) => void;
  selectedInstructorId: number | null;
}

export function InstructorList({ instructors, onSelectInstructor, selectedInstructorId }: InstructorListProps) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Instructores ({instructors.length})</CardTitle>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[calc(100vh-12rem)] pr-4 -mr-4">
                <div className="space-y-4">
                {instructors.length > 0 ? (
                    instructors.map((instructor) => (
                    <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                        onSelect={() => onSelectInstructor(instructor.id)}
                        isSelected={selectedInstructorId === instructor.id}
                    />
                    ))
                ) : (
                    <div className="text-center text-muted-foreground py-10">
                    <p>No se encontraron instructores con los filtros seleccionados.</p>
                    </div>
                )}
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
  );
}
