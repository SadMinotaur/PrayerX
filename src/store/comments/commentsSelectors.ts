import {createStructuredSelector} from 'reselect';
import {RootState} from '../store';
import {Column} from './commentsTypes';

export const CurrentColumnSelector = createStructuredSelector<
  RootState,
  {id: number},
  {column: Column}
>({
  // Should be always a column there
  column: (state: RootState, props) =>
    state.columns.find(({id}) => id === props.id) as Column,
});
