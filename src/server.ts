import express from 'express';
import Router from './routes/index';
import "reflect-metadata";
import './database';

const app = express();

app.use(Router);

app.listen(3000, () => {
  console.log('Servidor Iniciado');
});


