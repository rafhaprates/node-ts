import express from 'express';
import { router } from './routes/routes';
import "reflect-metadata";
import './database';

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('Servidor Iniciado');
});


