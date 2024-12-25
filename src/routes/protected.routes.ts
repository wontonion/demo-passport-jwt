import { Router } from 'express';
import { authenticateJwt } from '../middleware/auth.middleware';

const router = Router();

router.get('/profile', authenticateJwt, (req, res) => {
    res.json({
        message: 'Protected route, now you are authenticated',
        user: req.user
    });
});

export default router; 