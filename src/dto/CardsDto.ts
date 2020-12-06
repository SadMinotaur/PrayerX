import {ColumnDto} from './columns/ColumnsDto';

export type CardDto = {
  title: string;
  description: string;
  checked: boolean;
  column: ColumnDto;
};
