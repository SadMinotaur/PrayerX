export type AuthSignInReqDto = {
  email: string;
  password: string;
};

export type AuthSignInSuccessDto = {
  id: number;
  email: string;
  name: string;
  token: string;
};
