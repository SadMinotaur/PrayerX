import {Alert} from 'react-native';
import {add} from 'react-native-reanimated';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {Api} from '../Api';
import {regAction} from './userActions';

export function* rootSaga() {
  yield all([watchOnReg()]);
}

export function* watchOnReg() {
  yield takeEvery(regAction, regUserFunction);
}

function* regUserFunction() {
  try {
    yield fetch('https://trello-purrweb.herokuapp.com/', {
      method: 'GET',
    })
      .then((r) => {
        Alert.alert(r.json.toString());
      })
      .catch((er) => {
        Alert.alert(er.toString());
      });
  } catch (error) {
    console.log('some error');
  }
}
