import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Button, ScrollView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {LoadingPopup} from '../../common-components/LoadingPopup';
import {Title} from '../../common-components/Title';
import {
  getColumnsFailure,
  getColumnsRequest,
  getColumnsSuccess,
} from '../../store/columns/columnsAction';
import {promiseListener} from '../../store/store';
import {
  loginActionFailure,
  loginActionRequest,
  loginActionSuccess,
  regAction,
  regActionFailure,
  regActionSuccess,
} from '../../store/user/userActions';
import {styles} from './styles';

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const {register, handleSubmit, setValue} = useForm();
  const [isSignInState, setIsSignInState] = useState(false);
  const [waitingPopupState, setPopupState] = useState(false);

  const signIn = useCallback(
    (formData: any) => {
      promiseListener
        .createAsyncFunction({
          start: loginActionRequest.type,
          resolve: loginActionSuccess.type,
          reject: loginActionFailure.type,
        })
        .asyncFunction({
          email: formData.email,
          password: formData.password,
        })
        .then(
          () => {
            promiseListener
              .createAsyncFunction({
                start: getColumnsRequest.type,
                resolve: getColumnsSuccess.type,
                reject: getColumnsFailure.type,
              })
              .asyncFunction()
              .then(
                () => {
                  navigation.navigate('MyDesc', {});
                  setPopupState(false);
                },
                () => showError(),
              );
          },
          () => showError(),
        );
    },
    [navigation],
  );

  const reg = useCallback(
    (formData: any) => {
      promiseListener
        .createAsyncFunction({
          start: regAction.type,
          resolve: regActionSuccess.type,
          reject: regActionFailure.type,
        })
        .asyncFunction({
          email: formData.email,
          name: formData.name,
          password: formData.password,
        })
        .then(
          () => {
            navigation.navigate('MyDesc', {});
            setPopupState(false);
          },
          () => showError(),
        );
    },
    [navigation],
  );

  function showError(): void {
    Alert.alert('Something went wrong!');
    setPopupState(false);
  }

  function onSubmit(formData: any): void {
    setPopupState(true);
    if (isSignInState) {
      signIn(formData);
    } else {
      reg(formData);
    }
  }

  const onChangeField = useCallback(
    (name: string) => (text: string) => {
      setValue(name, text);
    },
    [setValue],
  );

  useEffect(() => {
    register('email');
    register('password');
    register('name');
  }, [register]);

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
      <LoadingPopup state={waitingPopupState} />
    </>
  );
};
