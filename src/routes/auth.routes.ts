import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// register route
router.post('/register', authController.register);

// login route
router.post('/login', authController.login);

// logout route
// router.get('/logout', authController.logout);

export default router;
