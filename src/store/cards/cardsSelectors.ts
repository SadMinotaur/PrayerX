import {createStructuredSelector} from 'reselect';
import {Comment} from '../comments/commentsTypes';
import {RootState} from '../store';
import {Card} from './cardsTypes';

export const CardSelector = createStructuredSelector<
  RootState,
  {id: number},
  {card: Card; comments: Comment[]; user: string}
>({
  // Should be always a card there
  card: (state: RootState, props) =>
    state.cards.find(({id}) => id === props.id) as Card,
  comments: (state: RootState, props) =>
    state.comments.filter((v) => v.cardId === props.id),
  user: (state: RootState) => state.user.name,
});
