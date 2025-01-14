import { Router } from 'express';
import { addUser, fetchUsers, userLogin } from '../controllers/userController';

const router = Router();

router.post('/users', userLogin);
router.post('/users', addUser);
router.get('/users', fetchUsers);

export default router;
