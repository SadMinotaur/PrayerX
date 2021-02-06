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
    fontFamily: 'SFUIText-Light',
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
    paddingLeft: 15,
    paddingTop: 26,
    backgroundColor: '#fff',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  statsTableTextDate: {
    fontFamily: 'SFUIText-Regular',
    lineHeight: 26,
    fontSize: 22,
    color: '#BFB393',
    marginBottom: 10,
  },
  statsTableTextNormal: {
    fontFamily: 'SFUIText-Regular',
    lineHeight: 15,
    fontSize: 13,
    color: '#514D47',
  },
  statsTableTextBlue: {
    fontFamily: 'SFUIText-Regular',
    lineHeight: 15,
    fontSize: 13,
    color: '#72A8BC',
  },
  membersContainer: {
    flex: 1,
    height: 144,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    padding: 15,
  },
  membersText: {
    fontFamily: 'SFUIText-Semibold',
    lineHeight: 15,
    fontSize: 13,
    textTransform: 'uppercase',
    color: '#72A8BC',
  },
  image: {
    width: 38.45,
    height: 36,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  imagesContainer: {
    height: 77,
    flexDirection: 'row',
    marginTop: 13,
  },
  addCommentsView: {
    paddingLeft: 16,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    height: 56,
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 15,
    flex: 1,
    marginRight: 15,
  },
});
