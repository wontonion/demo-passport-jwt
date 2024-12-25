import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User, users } from '../models/user.model';

export class AuthController {
  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, email, password } = req.body;

      // check if user already exists
      if (users.find(user => user.email === email)) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }

      // create new user if not exists
      const hashedPassword = await User.hashPassword(password);
      const newUser = new User(
        Date.now().toString(), // id
        username,
        email,
        hashedPassword,
      );
      users.push(newUser);

      // generate token
      const token = jwt.sign(
        { userId: newUser.id, email: newUser.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '30s' }
      );

      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  }

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      // find user
      const user = users.find(u => u.email === email);
      if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }

      // validate password
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }

      // generate token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1d' }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
  }

//   logout = (req: Request, res: Response): void => {
//     res.json({ message: 'Logged out' });
//   }
} 
