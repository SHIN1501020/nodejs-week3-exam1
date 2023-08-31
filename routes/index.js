import express from 'express';
import UsersRouter from './users.js';

const router = express.Router();

//user경로
router.use('/user', UsersRouter);

export default router;
