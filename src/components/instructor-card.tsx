"use client";

import type { Instructor } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InstructorCardProps {
  instructor: Instructor;
  onSelect: () => void;
  isSelected: boolean;
}

export function InstructorCard({ instructor, onSelect, isSelected }: InstructorCardProps) {
  const initials = `${instructor.nombre[0]}${instructor.apellido_paterno[0]}`;
  const fullName = `${instructor.nombre} ${instructor.apellido_paterno} ${instructor.apellido_materno}`;

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary",
        isSelected && "border-primary ring-2 ring-primary ring-offset-2"
      )}
      onClick={onSelect}
    >
      <CardContent className="p-4 flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={`https://placehold.co/128x128.png?text=${initials}`} data-ai-hint="professional headshot" alt={fullName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-bold text-lg font-headline">{fullName}</h3>
          <p className="text-sm text-muted-foreground">{instructor.area_estudio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
