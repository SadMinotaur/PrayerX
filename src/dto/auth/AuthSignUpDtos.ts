import {ColumnDto} from '../columns/ColumnsDto';

export type AuthSignUpReqDto = {
  email: string;
  name: string;
  password: string;
};

export type AuthSignUpSuccessDto = {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: ColumnDto[];
  id: number;
};
