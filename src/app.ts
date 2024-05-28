import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
// app.use('/api/products');

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Developers!');
});

export default app;
