export interface User{
    id?: number;
    name: string;
    email: string;
    password: string;
    admin: boolean;
}

export interface Authentication {
    username: string;
    password: string;
}

export interface StorageInfo{
    admin: string;
    token: string;
}