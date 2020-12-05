import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button, ScrollView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Title} from '../../common-components/Title';
import {loginActionRequest, regAction} from '../../store/user/userActions';
import {styles} from './styles';

export const Login: React.FC = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {register, handleSubmit, setValue} = useForm({});
  const [loginState, setLoginState] = useState(false);

  const onSubmit = useCallback(
    (formData) => {
      if (loginState) {
        dispatch(
          loginActionRequest({
            email: formData.email,
            password: formData.password,
          }),
        );
      } else {
        dispatch(
          regAction({
            email: formData.email,
            name: formData.name,
            password: formData.password,
          }),
        );
      }
      navigation.navigate('MyDesc', {});
    },
    [dispatch, loginState, navigation],
  );

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
          onPress={() => {
            setLoginState((ps) => !ps);
          }}>
          <Text style={styles.buttonText}>
            {loginState ? 'Sing-up' : 'Sing-in'}
          </Text>
        </TouchableOpacity>
        {!loginState && (
          <View style={styles.inputBorder}>
            <Title name={'Name'} />
            <TextInput
              placeholder="Name"
              onChangeText={onChangeField('name')}
              style={styles.textInput}
            />
          </View>
        )}
        <View style={styles.inputBorder}>
          <Title name={'Email'} />
          <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            onChangeText={onChangeField('email')}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputBorder}>
          <Title name={'Password'} />
          <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Password"
            onChangeText={onChangeField('password')}
            style={styles.textInput}
          />
        </View>
        <Button
          onPress={() => {
            handleSubmit(onSubmit);
            console.log('here');
          }}
          title={loginState ? 'Sing-in' : 'Sing-up'}
        />
      </ScrollView>
    </>
  );
};