import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardText: {
    width: 170,
    height: 20,
    marginRight: 10,
  },
  prayText: {
    marginRight: 10,
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
  swipeDeleteText: {
    fontSize: 13,
    lineHeight: 15.23,
    fontFamily: 'SFUIText-Medium',
    color: '#fff',
  },
  line: {backgroundColor: 'blue', width: 3, height: 24, borderRadius: 3},
  checkBox: {
    marginLeft: 15,
    marginRight: 15,
  },
});
