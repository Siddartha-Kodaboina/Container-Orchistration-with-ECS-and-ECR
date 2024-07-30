import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Successfully reached TypeScript Node.js backend! in V3');
});

router.get('/health', (req: Request, res: Response) => {
    throw new Error("Internal Server Error");
  res.send({ status: 'The backend is healthy' });
});

export default router;
