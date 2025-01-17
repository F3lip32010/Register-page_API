import { Request, Response } from 'express'; // Certifique-se de importar Request e Response corretamente
import { getUsers } from '../../models/userModel';

class GetAllUsers {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const name = req.query.name as string | undefined; // Parâmetro opcional
      const users = await getUsers(name); // Certifique-se de que getUsers está implementado corretamente

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
  }
}

export default GetAllUsers;
