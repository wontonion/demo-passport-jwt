export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

declare global {
  namespace Express {
    interface User {
      id: string;
      username: string;
      email: string;
    }
  }
}
