import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  comments: {
    flex: 1,
    height: 74,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 14,
    backgroundColor: '#fff',
  },
  shouldBeImage: {
    width: 46,
    height: 46,
    backgroundColor: '#BFB393',
    borderRadius: 50,
    marginRight: 9,
  },
  topContainer: {flexDirection: 'row'},
  textTitle: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
    marginRight: 5,
  },
  textContent: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    lineHeight: 20,
    color: '#9C9C9C',
  },
  textTime: {
    fontFamily: 'SFUIText-Light',
    fontSize: 13,
    lineHeight: 20,
    color: '#9C9C9C',
  },
  swipeDelete: {
    display: 'flex',
    width: 80,
    height: 74,
    backgroundColor: '#AC5253',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeUpdate: {
    display: 'flex',
    width: 80,
    height: 74,
    backgroundColor: '#72A8BC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeText: {
    fontSize: 13,
    lineHeight: 15.23,
    fontFamily: 'SFUIText-Medium',
    color: '#fff',
  },
  input: {width: 160, marginRight: 10},
});
