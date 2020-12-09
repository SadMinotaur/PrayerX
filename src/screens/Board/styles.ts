import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainerAlign: {},
  mainContainer: {flex: 1},
  header: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    flex: 7,
  },
  headerAddIcon: {
    flex: 1,
  },
  iconContainer: {
    marginTop: 2,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: '#AC5253',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 9,
    fontFamily: 'SFUIText-Medium',
    lineHeight: 10.74,
    color: '#fff',
  },
});
