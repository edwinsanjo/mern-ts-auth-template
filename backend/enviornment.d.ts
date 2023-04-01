export type User = {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      JWT_SECRET: string;
      JWT_EXPIRATION: number;
      JWT_REFRESH_EXPIRATION: number;
      NODE_ENV: "production" | "development";
    }
  }
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}

export {};