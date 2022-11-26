import { Usuario } from "./usuario";

export type Diaria = {
    id: number;
	data: Date;
	cidade: String;
	valorDiaria: number;
	valorGasto: number;
	portaria: number;
	status: number;
	compDespesa: Blob;
	compDesloca: Blob;
	usuario: Usuario;	
}

export type DiariaPage = {
    content: Diaria[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}