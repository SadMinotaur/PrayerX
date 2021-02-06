import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerAlign: {},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
  },
  textInput: {
    fontFamily: 'SFUIText-Light',
    flex: 1,
  },
  textInputBorder: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 10,
  },
  showAnsweredButton: {
    height: 30,
    width: 209,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    borderRadius: 15,
    margin: 20,
    alignSelf: 'center',
  },
  showAnsweredText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 14.32,
    fontFamily: 'SFUIText-Medium',
  },
  cardContainer: {alignItems: 'center'},
});
