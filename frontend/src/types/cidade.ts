export type Cidade = {
    id: number;
    nome: string;
    valor: number;
}

export type CidadePage = {
    content: Cidade[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}