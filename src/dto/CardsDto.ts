import {ColumnDto} from './ColumnsDto';

export type CardDto = {
  title: string;
  description: string;
  checked: boolean;
  column: ColumnDto;
};
