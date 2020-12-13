import {createStructuredSelector} from 'reselect';
import {Card} from '../cards/cardsTypes';
import {RootState} from '../store';
import {Column} from './columnsTypes';

export const CurrentColumnSelector = createStructuredSelector<
  RootState,
  {id: number},
  {column: Column}
>({
  // Should be always a column there
  column: (state: RootState, props) =>
    state.columns.find(({id}) => id === props.id) as Column,
});

export const ColumnCheckedCardsSelector = createStructuredSelector<
  RootState,
  {idColumn: number},
  {cardsChecked: Card[]; cardsUnchecked: Card[]}
>({
  cardsChecked: (state: RootState, props) =>
    state.cards.filter(
      (v: Card) => props.idColumn === v.columnId && v.checked === true,
    ),
  cardsUnchecked: (state: RootState, props) =>
    state.cards.filter(
      (v: Card) => props.idColumn === v.columnId && v.checked === false,
    ),
});
