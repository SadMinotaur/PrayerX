import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#fff'},
  header: {
    flex: 1,
    height: 130,
    padding: 17,
    backgroundColor: '#BFB393',
  },
  headerIcons: {justifyContent: 'space-between', flexDirection: 'row'},
  headerText: {
    marginTop: 15,
    color: '#fff',
    fontFamily: 'SFUIText-Medium',
    fontSize: 17,
    lineHeight: 27,
  },
  lastPrayed: {
    paddingLeft: 15,
    flex: 1,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lastPrayedText: {
    color: '#514D47',
    marginLeft: 15,
    lineHeight: 20,
    fontFamily: 'SFUIText-Medium',
    fontSize: 17,
  },
  statsTable: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 216,
    backgroundColor: 'blue',
  },
  statsTableItem: {
    height: 108,
    width: '50%',
    backgroundColor: '#fff',
    borderColor: '#E5E5E5',
    borderLeftWidth: 0,
    borderWidth: 1,
  },
});
