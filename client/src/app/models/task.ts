export interface Task {
    id: number;
    name?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    users?: User[];
    completed?: boolean;
    status?: string;
    comments?: number;
    attachments?: number;
}

export interface User {
    name?: string;
    image?: string;
}

export interface DialogConfig {
    visible: boolean;
    header?: string;
    newTask?: boolean;
}