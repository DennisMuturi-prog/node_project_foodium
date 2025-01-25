export interface GoogleProfile {
    provider: 'google';
    id: string;
    name?: {
      familyName: string;
      givenName: string;
    };
    displayName: string;
    birthday?: string;
    relationship?: string;
    isPerson?: boolean;
    isPlusUser?: boolean;
    placesLived?: Array<{
      value: string;
      primary?: boolean;
    }>;
    language?: string;
    emails?: Array<{
      value: string;
      verified?: boolean;
    }>;
    gender?: string;
    picture?: string;
    coverPhoto?: string;
  }
  export interface AuthenticatedUser extends GoogleProfile {
    refreshTokenVersion: number;
    username:string
  }
  export interface AuthenticatedRequest extends Request {
    user?: AuthenticatedUser;
  }
  export interface PasswordUser {
    id: number;
    username: string;
    salt: string;
    hash: string;
    __v: number;
    refreshTokenVersion:number
  }