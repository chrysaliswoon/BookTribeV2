export interface User {
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    images: Image[]
}

export interface Image {
    name: string;
    objectURL: string;
}