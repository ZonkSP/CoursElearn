import { User } from "./usuarios.interface";

export interface cursos {
    id: number,
    title: string,
    description: string,
    materials: string[],
    videos: string[],
    teacher: User, // Podría ser un string con el ObjectId del profesor
    tasks: Task[],
    // Otros campos relacionados con el curso
}

interface Task {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    completedBy: string[] // Lista de IDs de estudiantes que han completado la tarea
    // Otros campos relacionados con la tarea
}