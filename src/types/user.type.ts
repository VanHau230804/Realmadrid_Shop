/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAccount {
  username?: string;
  email: string;
  password: string;
  password_confirm?: string;
}
export interface IUser {
  [x: string]: any;
  access_token: string;
  token_type: string;
  expires_in: number;
}
