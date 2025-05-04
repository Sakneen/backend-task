import type { Organization } from './src/database/models/organization';
import type { User } from './src/database/models/user';

declare global {
  declare namespace Express {
    export interface Request {
      organization?: Organization;
      user?: User;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      // App
      PORT: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
