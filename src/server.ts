import express from 'express';
import Router from './routes/index';

const app = express();

app.use(Router);

app.listen(3000, () => {
  console.log('Servidor Iniciado');
});