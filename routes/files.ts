import { type Request, type Response, Router } from 'express';
const router = Router();

router.get('/:id', (request: Request, response: Response) => {
  return response.status(200).send('get one file entry');
});

router.post('/', (request: Request, response: Response) => {
  return response.status(200).send('post one file entry');
});

export default router;
