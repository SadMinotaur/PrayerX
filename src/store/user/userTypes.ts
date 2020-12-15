export interface UserStore {
  id: number;
  email: string;
  name: string;
}

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserSignUp extends UserSignIn {
  name: string;
}
