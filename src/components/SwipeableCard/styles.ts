import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardText: {
    width: 160,
    height: 20,
    marginRight: 10,
  },
  input: {width: 160, marginRight: 10},
  prayText: {
    marginLeft: 5,
    marginRight: 2,
  },
  swipeContainer: {
    width: 345,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    height: 66,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  swipeDelete: {
    display: 'flex',
    width: 80,
    height: 68,
    backgroundColor: '#AC5253',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeUpdate: {
    display: 'flex',
    width: 80,
    height: 68,
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
  checkBox: {
    marginLeft: 15,
    marginRight: 15,
  },
});
