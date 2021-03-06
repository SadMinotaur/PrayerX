import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Button, ScrollView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingPopup} from '../../common-components/LoadingPopup';
import {Title} from '../../common-components/Title';
import {getColumnsRequest} from '../../store/columns/columnsAction';
import {promiseListener, RootState} from '../../store/store';
import {
  loginActionFailure,
  loginActionRequest,
  loginActionSuccess,
  regAction,
  regActionFailure,
  regActionSuccess,
} from '../../store/user/userActions';
import {LoginScreenSelector} from '../../store/user/userSelectors';
import {UserSignUp} from '../../store/user/userTypes';
import {styles} from './styles';

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {register, handleSubmit, setValue} = useForm();
  const [isSignInState, setIsSignInState] = useState(false);

  const {isLoading, userId} = useSelector((state: RootState) =>
    LoginScreenSelector(state),
  );

  const signIn = useCallback(
    (formData: UserSignUp) => {
      promiseListener
        .createAsyncFunction({
          start: loginActionRequest.type,
          resolve: loginActionSuccess.type,
          reject: loginActionFailure.type,
        })
        .asyncFunction(formData)
        .then(
          () => {
            dispatch(getColumnsRequest());
            navigation.navigate('MyDesc', {});
          },
          () => showError(),
        );
    },
    [dispatch, navigation],
  );

  const reg = useCallback(
    (formData: UserSignUp) => {
      promiseListener
        .createAsyncFunction({
          start: regAction.type,
          resolve: regActionSuccess.type,
          reject: regActionFailure.type,
        })
        .asyncFunction(formData)
        .then(
          () => navigation.navigate('MyDesc', {}),
          () => showError(),
        );
    },
    [navigation],
  );

  function showError(): void {
    Alert.alert('Something went wrong!');
  }

  function onSubmit(formData: UserSignUp): void {
    if (isSignInState) {
      signIn(formData);
    } else {
      reg(formData);
    }
  }

  const onChangeField = useCallback(
    (name: string) => (text: string) => setValue(name, text),
    [setValue],
  );

  useEffect(() => {
    register('email');
    register('password');
    register('name');
    if (userId !== -1) {
      navigation.navigate('MyDesc', {});
    }
    return () => {};
  }, [navigation, register, userId]);

  return (
    <>
      <ScrollView style={styles.background}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsSignInState((ps) => !ps)}>
          <Text style={styles.buttonText}>
            {isSignInState ? 'Sign-up' : 'Sign-in'}
          </Text>
        </TouchableOpacity>
        {!isSignInState && (
          <View style={styles.inputBorder}>
            <Title movedLeft={true} name={'Name'} />
            <TextInput
              onChangeText={onChangeField('name')}
              style={styles.textInput}
            />
          </View>
        )}
        <View style={styles.inputBorder}>
          <Title movedLeft={true} name={'Email'} />
          <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={onChangeField('email')}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputBorder}>
          <Title movedLeft={true} name={'Password'} />
          <TextInput
            secureTextEntry
            autoCompleteType="password"
            onChangeText={onChangeField('password')}
            style={styles.textInput}
          />
        </View>
        <Button
          onPress={handleSubmit(onSubmit)}
          title={isSignInState ? 'Sign-in' : 'Sign-up'}
        />
      </ScrollView>
      <LoadingPopup state={isLoading} />
    </>
  );
};
