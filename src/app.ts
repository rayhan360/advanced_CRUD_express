import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/Products/product.route';
import { OrderRoute } from './app/modules/Orders/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products', ProductRoutes);

// order route
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Developers!');
});

// middleware to handle route not found errors
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
