import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('Hello Word!');
});

router.get('/teste', (req: Request, res: Response) => {
  return res.send('Olá Mundão!');
});

router.post('/teste-post', (req: Request, res: Response) => {
  return res.send('Olá Mundão!');
});


export default router;