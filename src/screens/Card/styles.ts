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
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
  },
  statsTable: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 216,
  },
  statsTableItemTop: {
    height: 108,
    width: '50%',
    backgroundColor: '#fff',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  statsTableItemBot: {
    height: 108,
    width: '50%',
    backgroundColor: '#fff',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderLeftWidth: 0,
  },
});
