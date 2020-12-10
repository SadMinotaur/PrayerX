export type PostCardDto = {
  title: string;
  description: string;
  checked: boolean;
  column: number;
};

export type PostCardDtoResp = {
  title: string;
  description: string;
  checked: boolean;
  column: CardColumnResponce;
  id: number;
  columnId: number;
};

export type CardColumnResponce = {
  id: number;
  title: string;
  userId: number;
};

export type GetAllCardsDto = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: [];
};
