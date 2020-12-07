import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
    borderBottomColor: '#72A8BC',
    borderBottomWidth: 2,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'SFUIText-Medium',
  },
  textInput: {
    flex: 1,
  },
  textInputBorder: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  showAnsweredButton: {
    height: 30,
    width: 209,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    borderRadius: 15,
    margin: 20,
  },
  showAnsweredText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 14.32,
    fontFamily: 'SFUIText-Medium',
  },
});
