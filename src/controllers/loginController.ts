// import { createUser, userLoginCor } from "../models/userModel";
// import { User } from "../types/user";
// import { Request, Response } from 'express';

// export const userLogin = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const user: User = req.body;
  
//       // Validação dos campos obrigatórios
//       if (!user.nome || !user.email || !user.senha || !user.data_nascimento) {
//         res.status(400).json({ message: 'Todos os campos são obrigatórios: nome, email, senha e data de nascimento.' });
//         return; // Encerrar execução se os dados forem inválidos
//       }
  
//       // Inserir o usuário no banco
//       await userLoginCor(user);
  
//       res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
//     }
//   };