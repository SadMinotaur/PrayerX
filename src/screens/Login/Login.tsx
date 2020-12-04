import React, {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Title} from '../../components/Title';
import {styles} from './styles';

export const Login: React.FC = () => {
  const {register, handleSubmit, setValue} = useForm();

  const onSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);

  const onChangeField = useCallback(
    (name) => (text: any) => {
      setValue(name, text);
    },
    [setValue],
  );

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <>
      <View style={styles.background}>
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
        <Button onPress={handleSubmit(onSubmit)} title={'SUBMIT'} />
      </View>
    </>
  );
};
