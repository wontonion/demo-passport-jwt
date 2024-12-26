# Demo of JWT authentication using Passport.js

## Dependencies
This demo runs on `Node.js` with `pnpm`  and uses the following dependencies:
- `express`: a simple and flexible Node.js web application framework
- `passport`: an authentication middleware for Node.js
- `passport-jwt`: a Passport strategy for authenticating with a JSON Web Token
- `jsonwebtoken`: a library to work with JSON Web Tokens
- `bcrypt`: a library to hash passwords
- `dotenv`: a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- `ts-node-dev`: a TypeScript execution environment and reload mechanism for `Node.js`

## Usage
1. Clone the repository
2. Run `pnpm install` to install the dependencies
3. Run `pnpm run dev` to start the server

## Main routes
- `/auth/register`: register a new user, after successful registration, you can login with the same username, email and password. Here is a sample request body:
```json
{
  "username": "test",
  "email": "test@example.com",
  "password": "password123456"
}
```
- `/auth/login`: login with username, email and password. After successful login, you will get a JWT token in the response body.
- `/api/profile`: protected route that requires authentication, you can use the JWT token to access this route.
