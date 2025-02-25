import Categoria from "../categoria/Categoria";

export default interface Produto {
    id: number;
    nome: string;
    categoria: Categoria[] | null;
}