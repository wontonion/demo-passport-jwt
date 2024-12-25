import bcrypt from 'bcryptjs';

export class User {
  id: string;
  username: string;
  email: string;
  password: string;

  constructor(id: string, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // hash password
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  // validate password
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

// mock database
export const users: User[] = []; 