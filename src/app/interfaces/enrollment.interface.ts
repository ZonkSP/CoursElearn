import { cursos } from "./cursos.interface";
import { User } from "./usuarios.interface";

export interface Enrollment {
    student: User; 
    course: cursos; 
    enrolledAt: Date;
}