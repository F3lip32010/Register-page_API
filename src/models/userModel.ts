import { pool } from '../config/database';
import { User } from '../types/user';

export const createUser = async (user: User): Promise<void> => {
  const { nome, data_nascimento, sexo, email, instagram, telefone } = user;

  const query = `
    INSERT INTO tb_alunos (nome, data_nascimento, sexo, email, instagram, telefone)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const values = [nome, data_nascimento, sexo, email, instagram, telefone];

  await pool.query(query, values);
};

export const getUsers = async (name?: string): Promise<User[]> => {
  let query = 'SELECT * FROM tb_alunos';
  const values: string[] = [];

  if (name) {
    query += ' WHERE nome ILIKE $1';
    values.push(`%${name}%`);
  }

  const result = await pool.query(query, values);
  return result.rows;
};

export const userLoginCor = async (user: User): Promise<void> => {
  const { nome, email, senha, data_nascimento } = user;

  const query = `
    INSERT INTO tb_usuarios (nome, email, password, data_nascimento)
    VALUES ($1, $2, $3, $4)
  `;
  const values = [nome, email, senha, data_nascimento];

  await pool.query(query, values);
};

