import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  prayText: {
    marginLeft: 5,
    marginRight: 2,
  },
  swipeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    height: 66,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  swipeDelete: {
    display: 'flex',
    width: 80,
    height: 66,
    backgroundColor: '#AC5253',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeUpdate: {
    display: 'flex',
    width: 80,
    height: 66,
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
  viewRow: {flexDirection: 'row', alignItems: 'center'},
});
