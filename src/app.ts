import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import chalk from 'chalk'; // Alterado para `import`

import r1Routes from './routes/r1_routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', r1Routes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(chalk.green('ON-LINE')); // Usando `chalk` para exibir texto em verde
});
