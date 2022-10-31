export type Cidade = {
    id: number;
    nome: string;
    valor: number;
}

export type UsuarioPage = {
    content: Cidade[];
    last: number;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}