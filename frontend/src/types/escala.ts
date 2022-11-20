export type Escala = {
    id: number;
    data: Date;
    escala: Blob;    
}

export type EscalaPage = {
    content: Escala[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}