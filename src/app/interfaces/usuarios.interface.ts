export interface User {
    name: string,
    email: string,
    password: string,
    role: 'professor' | 'student',
    profile: {
        photo: string,
        bio: string
        // Otra información relevante del perfil
    };
    // Otros campos relevantes según sea necesario
}