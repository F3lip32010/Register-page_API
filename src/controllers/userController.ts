import { Request, Response } from 'express';
import { User } from '../types/user';
import { createUser, getUsers, userLoginCor } from '../models/userModel';

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: User = req.body;

    if (!user.nome || !user.data_nascimento) {
      res.status(400).json({ message: 'Nome e data de nascimento são obrigatórios.' });
    }

    await createUser(user);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso! Edvaldo' });
  } catch (error) {
    res.status(401).json({ message: 'Erro ao cadastrar usuário.' });
  }
};


export const fetchUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name as string | undefined; // Parâmetro opcional
    const users = await getUsers(name);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
};
export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: User = req.body;

    // Validação dos campos obrigatórios
    if (!user.nome || !user.email || !user.senha || !user.data_nascimento) {
      res.status(400).json({ message: 'Todos os campos são obrigatórios: nome, email, senha e data de nascimento.' });
      return; // Encerrar execução se os dados forem inválidos
    }

    // Inserir o usuário no banco
    await userLoginCor(user);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
};






