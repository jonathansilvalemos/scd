export type LoginInfo = {
    matricula: number;
    senha: string;
}

export type LoginPage = {
    content: LoginInfo[];
    last: number;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}