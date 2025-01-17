import { Router } from 'express';
import { AuthenticatorRoutes } from './auth.routes';

const router = Router();
router.use('/auth', new AuthenticatorRoutes().router)


// router.post('/users', userLogin);
// router.post('/users', addUser);
// router.get('/users', fetchUsers);
// router.post('/', )

export default router;
