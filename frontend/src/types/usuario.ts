export type Usuario = {
    codigo: number;
    matricula: number;
    nome: string;
    senha: string;
    tipo: string;
}

export type UsuarioPage = {
    content: Usuario[];
    last: number;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}