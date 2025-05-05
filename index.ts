import express from 'express';
import authRoutes from './auth-routes';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();
router.use('/auth', authRoutes);
router.get('/kanban', authenticateToken, (req, res) => {
  res.json({ tasks: ['Example Task 1', 'Example Task 2'] });
});

export default router;
