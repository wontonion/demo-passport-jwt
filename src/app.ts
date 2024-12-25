import express from 'express';
import passport from 'passport';
import './config/passport';
import { AuthController } from './controllers/auth.controller';
import authRoutes from './routes/auth.routes';
import protectedRoutes from './routes/protected.routes';

const app = express();

// port
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, world! API is working' });
});

// auth routes
app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

