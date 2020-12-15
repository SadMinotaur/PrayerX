import {createStructuredSelector} from 'reselect';
import {RootState} from '../store';

export const LoginScreenSelector = createStructuredSelector<
  RootState,
  {userId: number; isLoading: boolean}
>({
  userId: (state: RootState) => state.user.id,
  isLoading: (state: RootState) => state.isLoading,
});
