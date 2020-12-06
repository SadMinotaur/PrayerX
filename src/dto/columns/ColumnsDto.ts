export type ColumnDto = {
  id: number;
  title: string;
  description: string;
};

export type ColumnDtoCreate = {
  title: string;
  description: string;
};

export type ColumnDtoCreateResp = {
  title: string;
  description: string;
  user: string;
  id: number;
};
