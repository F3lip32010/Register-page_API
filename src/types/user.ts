export interface User {
    nome: string;
    senha: string;
    data_nascimento: string; // formato YYYY-MM-DD
    sexo?: string; // "M" ou "F"
    email?: string;
    instagram?: string;
    telefone?: string;
  }
  