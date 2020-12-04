import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Title} from '../../components/Title';
import {styles} from './styles';

export const Login: React.FC = () => {
  const {email, password} = useForm<{}>();

  function onSubmit() {}

  return (
    <>
      <View style={styles.inputBorder}>
        <Title name={'Email'} />
        <TextInput value={email} style={styles.textInput}></TextInput>
      </View>
      <View style={styles.inputBorder}>
        <Title name={'Password'} />
        <TextInput value={password} style={styles.textInput}></TextInput>
      </View>
      <Button onPress={() => {}} title={'SUBMIT'}></Button>
    </>
  );
};
