import {createStructuredSelector} from 'reselect';
import {RootState} from '../store';
import {Card} from './cardsTypes';

export const CardSelector = createStructuredSelector<
  RootState,
  {id: number},
  {card: Card}
>({
  // Should be always a card there
  card: (state: RootState, props) =>
    state.cards.find(({id}) => id === props.id) as Card,
});
