import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import fileRouter from './routes/files';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: 'REST API Running',
    time: new Date().getTime().toLocaleString()
  });
});

app.use('/files', fileRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
