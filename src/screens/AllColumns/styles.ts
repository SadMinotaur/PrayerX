import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {alignItems: 'center'},
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  header: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  headerTitle: {
    flex: 7,
  },
  headerAddIcon: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalInput: {
    margin: 10,
    width: 250,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#E5E5E5',
  },
});
